const fs = require("fs");
const path = require("path");
const { build } = require("./app.js");

const app = build({ 
  logger: true,
  http2: true,
  https: {
    allowHTTP1: true, // fallback support for HTTP1
    key: fs.readFileSync(path.join(__dirname, "https", "fastify.key")),
    cert: fs.readFileSync(path.join(__dirname, "https", "fastify.cert")),
  }
 });

app.listen({ port: process.env.PORT || 5000, host : '0.0.0.0'}, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});