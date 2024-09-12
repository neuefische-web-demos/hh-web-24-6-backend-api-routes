const SUPER_SECRET = "pizza";

export default function handler(request, response) {
  // response.statusCode = 203;
  response.status(200);
  console.log("on the server");
  response.end("Hello");
}
