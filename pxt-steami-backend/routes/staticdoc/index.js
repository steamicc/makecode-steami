const staticdoc = (fastify, _opts, done) => {
    fastify.get("/*", redirect);
    done();
};

const redirect = async (request, reply) => {
    const { hostname, url } = request;

    const redirectedUrl = url.replace('static/', 'docs/static/')

    await reply.redirect(redirectedUrl, 301)
};

module.exports = { staticdoc};