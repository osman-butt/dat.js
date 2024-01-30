"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const todosRouter_1 = __importDefault(require("./routers/todosRouter"));
const dbConnect_1 = __importDefault(require("./startup/dbConnect"));
(0, dbConnect_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/todos", todosRouter_1.default);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
