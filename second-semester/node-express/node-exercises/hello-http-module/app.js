import http from "node:http";
import { users } from "./users.js";
import { posts } from "./posts.js";

const app = http.createServer(async (req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  //   res.setHeader("Content-Type", "application/json");
  //   res.end("Hello, HTTP module!");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Working with HTTP module");
  } else if (req.url === "/users" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  } else if (req.url === "/posts" && req.method === "GET") {
    res.statusCode = 200;
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(posts));
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 - The page doesn't exist!");
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Serveren kører på "http://localhost:${port}`);
  //   console.log(JSON.stringify(posts));
});
