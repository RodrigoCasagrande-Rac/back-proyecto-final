const http = require("http");
const port = 3001;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text-plain");
  res.end("Hola desde el back");
});

server.listen(port, () => {
  console.log("Servidor en el puerto: ", port);
});
