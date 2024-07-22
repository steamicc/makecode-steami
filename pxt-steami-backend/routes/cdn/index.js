const cdn = (fastify, _opts, done) => {
    fastify.get("/*", redirect);
    done();
};

const redirect = async (request, reply) => {
    const { hostname, url } = request;

    const redirectedUrl = url.replace('cdn/', '')

    await reply.redirect(redirectedUrl, 301)
};

module.exports = { cdn };