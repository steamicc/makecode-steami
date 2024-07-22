const oauth = (fastify, _opts, done) => {
    fastify.get("/*", redirect);
    done();
};

const redirect = async (request, reply) => {
    return {}
};

module.exports = { oauth };