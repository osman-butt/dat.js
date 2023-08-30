import http from "node:http";
import fs from "fs/promises";

const app = http.createServer(async (req, res) => {
  const userIP = req.socket.remoteAddress;
  let cookie = req.headers.cookie;
  // Check if the user has a cookie
  if (cookie === undefined) {
    res.setHeader("Set-Cookie", `session-id=${new Date().getTime()}`);
  }
  const userAgent = req.headers["user-agent"];
  const userPlatform = req.headers["sec-ch-ua-platform"];
  console.log(userIP);
  console.log(userAgent);
  console.log(userPlatform);
  // ROUTES
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Working with HTTP module");
  } else if (req.url === "/users" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const data = await fs.readFile("users.json");
    res.end(data);
  } else if (req.url === "/posts" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    const data = await fs.readFile("posts.json");
    res.end(data);
  } else if (req.url === "/posts" && req.method === "POST") {
    const requestBody = await getRequestData(req);

    const newPost = JSON.parse(requestBody);
    newPost.id = new Date().getTime();

    const data = await fs.readFile("posts.json");
    const posts = await JSON.parse(data);

    posts.push(newPost);

    const postsJSON = JSON.stringify(posts);
    await fs.writeFile("posts.json", postsJSON);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(JSON.stringify({ status: "Resource created", id: newPost.id }));
  } else if (req.url === "/users" && req.method === "POST") {
    const requstBody = await getRequestData(req);

    const newUser = JSON.parse(requstBody);

    newUser.id = new Date().getTime();

    const data = await fs.readFile("users.json");
    const users = await JSON.parse(data);
    users.push(newUser);

    const usersJson = JSON.stringify(users);

    await fs.writeFile("users.json", usersJson);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    res.end(usersJson);
  } else if (req.url === "/log" && req.method === "GET") {
    const data = await fs.readFile("log.txt");
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(data);
  } else if (req.url === "/cookies" && req.method === "GET") {
    const cookies = req.headers.cookie;
    console.log(cookies);
    res.end(`Cookies: ${cookies}`);
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

async function getRequestData(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", chunk => (body += chunk));
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}
