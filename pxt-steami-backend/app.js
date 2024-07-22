
const fastify = require("fastify");
const fstatic = require('@fastify/static');
const freplyfrom = require('@fastify/reply-from');
const path = require("path");

const { api } = require("./routes/api");
const { blb } = require("./routes/blb");
const { cdn } = require("./routes/cdn");
const { oauth } = require("./routes/oauth");
const { staticdoc } = require("./routes/staticdoc");
const { trgblb } = require("./routes/trgblb");


const build = (opts = {}) => {
    const app = fastify(opts);

    app.register(fstatic, {
        root: path.join(__dirname, "../static"),
        prefix: "/",
    });

    app.register(freplyfrom, {
        base: "https://makecode.com/"
    });

    app.register(api, { prefix: "/api" });
    app.register(blb, { prefix: "/blb" });
    app.register(cdn, { prefix: "/cdn" });
    app.register(oauth, { prefix: "/oauth" });
    app.register(staticdoc, { prefix: "/static" });
    app.register(trgblb, { prefix: "/trgblb" });

    return app;
};

module.exports = { build };