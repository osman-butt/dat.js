import express from "express";
import fs from "fs/promises";

const app = express();
app.use(express.json());

const port = 3000;
const host = "http://localhost";

app.get("/", (req, res) => {
  console.log("HELLO");
  res.send("HELLO");
});

app.get("/users", async (req, res) => {
  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);
  console.log(users);
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);
  const user = users.find(u => u.id === Number(id));
  res.json(user);
});

app.post("/users", async (req, res) => {
  const newUser = req.body;
  newUser.id = new Date().getTime();
  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);
  users.push(newUser);
  const usersJSON = JSON.stringify(users);
  await fs.writeFile("users.json", usersJSON);
  console.log(users);
  res.json(users);
});

app.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  console.log(updatedUser);
  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);
  const userToUpdate = users.find(u => u.id === Number(id));
  userToUpdate.image = updatedUser.image;
  userToUpdate.mail = updatedUser.mail;
  userToUpdate.name = updatedUser.name;
  userToUpdate.title = updatedUser.title;
  await fs.writeFile("users.json", JSON.stringify(users));
  res.json(users);
});

app.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);
  const index = users.findIndex(p => p.id === Number(id));
  users.splice(index, 1);
  await fs.writeFile("users.json", JSON.stringify(users));
  res.json(users);
});

app.get("/posts", async (req, res) => {
  const data = await fs.readFile("posts.json");
  const posts = JSON.parse(data);
  console.log(posts);
  res.json(posts);
});

app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const data = await fs.readFile("posts.json");
  const posts = JSON.parse(data);
  const post = posts.find(a => a.uid === Number(id));
  console.log(id);
  console.log(post);
  res.json(post);
});

app.put("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const updatedPost = req.body;
  const data = await fs.readFile("posts.json");
  const posts = JSON.parse(data);
  const postToUpdate = posts.find(p => p.uid === Number(id));
  postToUpdate.caption = updatedPost.caption;
  postToUpdate.createdAt = updatedPost.createdAt;
  postToUpdate.image = updatedPost.image;
  await fs.writeFile("posts.json", JSON.stringify(posts));
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const newPost = req.body;
  const data = await fs.readFile("posts.json");
  const posts = JSON.parse(data);
  newPost.uid = new Date().getTime();
  posts.push(newPost);
  await fs.writeFile("posts.json", JSON.stringify(posts));
  console.log(posts);
  res.json(posts);
});

app.delete("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const data = await fs.readFile("posts.json");
  const posts = JSON.parse(data);
  const index = posts.findIndex(p => p.uid === Number(id));
  posts.splice(index, 1);
  await fs.writeFile("posts.json", JSON.stringify(posts));
  res.json(posts);
});

app.listen(port, () => {
  console.log(`The server is running on "${host}:${port}"`);
});
