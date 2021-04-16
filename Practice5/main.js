const http = require("http");
const querystring = require("querystring");

const port = 8000;

const server = http.createServer((request, response) => {
  const { headers, method, url } = request;
  console.log("headers: ", headers);
  console.log("method: ", method);
  console.log("url: ", url);

  if (method === "GET" && url === "/contacts") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Contactos");
    return;
  }
  if (method === "POST" && url === "/contacts") {
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        const contact = querystring.decode(body);
        console.log("contact: ", contact);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/plain");
        response.end("Contactos");
      });

    return;
  }
  response.statusCode = 404;
  response.setHeader("Content-Type", "text/plain");
  response.end("Page not found");
});

server.listen(port, () => {
  console.log("Servidor ejecutándose...");
  console.log("Abrir en un navegador http://localhost:8000");
});
