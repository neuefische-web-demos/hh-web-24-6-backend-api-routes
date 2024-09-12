import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("On the server");
  if (request.url === "/hello") {
    response.statusCode = 200;
    response.end("Hello World");
    return;
  }

  if (request.url === "/bye") {
    response.statusCode = 200;
    response.end("Bye World");
    return;
  }

  if (request.url === "/answer") {
    response.statusCode = 200;
    response.end("42");
    return;
  }

  response.statusCode = 404;
  response.end("I am sorry, this route does not exist.");
});

const PORT = 4200;

server.listen(PORT, () => {
  console.log(`Server up and running: http://localhost:${PORT}`);
});
