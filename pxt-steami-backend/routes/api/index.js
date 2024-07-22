const api = (fastify, _opts, done) => {
    fastify.get("/clientconfig", clientconfig);
    fastify.post("/compile/extension", compile);
    fastify.post("/scripts", scripts);
    done();
};

const clientconfig = async (request, reply) => {
   return {"primaryCdnUrl":"https://pxt.azureedge.net"}
};

const compile = async (request, reply) => {
    const { url} = request;
    await reply.from(url);
 };

 const scripts = async (request, reply) => {
    const { url} = request;
    await reply.from(url);
 };


module.exports = { api };