import express from "express";
import cors from "cors";
import fs from "fs/promises";

// Globals
const port = process.env.PORT || 3000;

// Initialize app
const app = express();

// HELPER FUNCTIONS
async function getUsers() {
  const data = await fs.readFile("users.json");
  const users = JSON.parse(data);
  return users;
}
async function saveUsers(data) {
  await fs.writeFile("users.json", JSON.stringify(data));
}

// Middleware
app.use(express.json()); // parse incomming JSON
app.use(cors());

// Entry point
app.post(`/users`, async (req, res) => {
  const newUser = req.body;
  newUser.id = new Date().getTime();
  const users = await getUsers();
  users.push(newUser);
  await saveUsers(users);
  res.json(users);
});

app.get(`/users`, async (req, res) => {
  const users = await getUsers();
  res.json(users);
});

app.listen(port, (req, res) => {
  console.log(`The server is running on "http://localhost:${port}"`);
});
