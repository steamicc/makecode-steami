const trgblb = (fastify, _opts, done) => {
    fastify.get("/*", redirect);
    done();
};

const redirect = async (request, reply) => {
    const { hostname, url } = request;

    const redirectedUrl = url.replace('trgblb/', '')

    await reply.redirect(redirectedUrl, 301)
};

module.exports = { trgblb };