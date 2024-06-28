namespace pxt.template {
    export const TS_CONFIG = `{
    "compilerOptions": {
        "target": "ES5",
        "noImplicitAny": true,
        "outDir": "built",
        "rootDir": "."
    },
    "exclude": ["pxt_modules/**/*test.ts"]
}
`;
    export function defaultFiles(): Map<string> {
        const files: Map<string> = {
            "tsconfig.json": TS_CONFIG,

            "test.ts": `// ${lf("tests go here; this will not be compiled when this package is used as an extension.")}
`,
            "_config.yml":
                `makecode:
  target: @TARGET@
  platform: @PLATFORM@
  home_url: @HOMEURL@
theme: jekyll-theme-slate
include:
  - assets
  - README.md
`,
            "Makefile": `all: deploy

build:
\tpxt build

deploy:
\tpxt deploy

test:
\tpxt test
`,
            "Gemfile": `source 'https://rubygems.org'
gem 'github-pages', group: :jekyll_plugins`,
            "README.md": `
> ${lf("Open this page at {0}",
                "[https://@REPOOWNER@.github.io/@REPONAME@/](https://@REPOOWNER@.github.io/@REPONAME@/)"
            )}

## ${lf("Use as Extension")}

${lf("This repository can be added as an **extension** in MakeCode.")}

* ${lf("open [@HOMEURL@](@HOMEURL@)")}
* ${lf("click on **New Project**")}
* ${lf("click on **Extensions** under the gearwheel menu")}
* ${lf("search for **https://github.com/@REPO@** and import")}

## ${lf("Edit this project")}

${lf("To edit this repository in MakeCode.")}

* ${lf("open [@HOMEURL@](@HOMEURL@)")}
* ${lf("click on **Import** then click on **Import URL**")}
* ${lf("paste **https://github.com/@REPO@** and click import")}

#### ${lf("Metadata (used for search, rendering)")}

* for PXT/@TARGET@
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
`,

            ".gitignore":
                `# MakeCode
built
node_modules
yotta_modules
yotta_targets
pxt_modules
.pxt
_site
*.db
*.tgz
.header.json
.simstate.json
`,
            ".vscode/settings.json":
                `{
    "editor.formatOnType": true,
    "files.autoSave": "afterDelay",
    "files.watcherExclude": {
        "**/.git/objects/**": true,
        "**/built/**": true,
        "**/node_modules/**": true,
        "**/yotta_modules/**": true,
        "**/yotta_targets": true,
        "**/pxt_modules/**": true,
        "**/.pxt/**": true
    },
    "files.associations": {
        "*.blocks": "html",
        "*.jres": "json"
    },
    "search.exclude": {
        "**/built": true,
        "**/node_modules": true,
        "**/yotta_modules": true,
        "**/yotta_targets": true,
        "**/pxt_modules": true,
        "**/.pxt": true
    },
    "files.exclude": {
        "**/pxt_modules": true,
        "**/.pxt": true
    }
}`,
            ".vscode/extensions.json":
            `{
    "recommendations": ["ms-edu.pxt-vscode-web"]
}`,
        };

        // override files from target
        const overrides = targetTemplateFiles();
        if (overrides) {
            Object.keys(overrides)
                .forEach(k => files[k] = overrides[k]);
        }

        return files;
    }

    export function targetTemplateFiles(): pxt.Map<string> {
        const overrides = pxt.appTarget.bundledpkgs[pxt.template.TEMPLATE_PRJ];
        if (overrides) {
            const r = Util.clone(overrides);
            delete r[pxt.CONFIG_NAME];
            return r;
        }
        return undefined;
    }

    export const TEMPLATE_PRJ = "template";

    export function packageFiles(name: string): pxt.Map<string> {
        const prj = pxt.appTarget.blocksprj || pxt.appTarget.tsprj;
        const config = U.clone(prj.config);
        // clean up
        delete (<any>config).installedVersion;
        delete config.additionalFilePath;
        delete config.additionalFilePaths;
        // (keep blocks files)
        config.preferredEditor = config.files.find(f => /\.blocks$/.test(f))
            ? pxt.BLOCKS_PROJECT_NAME : pxt.JAVASCRIPT_PROJECT_NAME;
        config.name = name;
        config.public = true;
        if (!config.version)
            config.version = "0.0.0"
        const files: Map<string> = {};
        const defFiles = defaultFiles();
        for (const f in defFiles)
            files[f] = defFiles[f];
        for (const f in prj.files)
            if (f != "README.md") // this one we need to keep
                files[f] = prj.files[f];

        const pkgFiles = Object.keys(files).filter(s =>
            /\.(blocks|md|ts|asm|cpp|h|py)$/.test(s))

        config.files = pkgFiles.filter(s => !/test/.test(s));
        config.testFiles = pkgFiles.filter(s => /test/.test(s));
        config.supportedTargets = [pxt.appTarget.id];

        files[pxt.CONFIG_NAME] = pxt.Package.stringifyConfig(config);

        return files
    }

    export function packageFilesFixup(files: Map<string>, options?: pxt.Map<string>) {
        const configMap = JSON.parse(files[pxt.CONFIG_NAME])
        if (options)
            Util.jsonMergeFrom(configMap, options);
        if (pxt.webConfig) { // CLI
            Object.keys(pxt.webConfig).forEach(k => configMap[k.toLowerCase()] = (<any>pxt.webConfig)[k]);
            configMap["platform"] = pxt.appTarget.platformid || pxt.appTarget.id
            configMap["target"] = pxt.appTarget.id
            configMap["docs"] = pxt.appTarget.appTheme.homeUrl || "./";
            configMap["homeurl"] = pxt.appTarget.appTheme.homeUrl || "???";
        }
        U.iterMap(files, (k, v) => {
            v = v.replace(/@([A-Z]+)@/g, (f, n) => configMap[n.toLowerCase()] || "")
            files[k] = v
        })
    }
}