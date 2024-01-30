"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = __importDefault(require("../models/todo"));
const todosRouter = (0, express_1.Router)();
todosRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield todo_1.default.find();
        res.send(todos);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
todosRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = new todo_1.default({ title: req.body.title });
    try {
        const savedTodo = yield todo.save();
        res.json(savedTodo);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
todosRouter.delete("/:todoId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const removedTodo = yield todo_1.default.deleteOne({ _id: req.params.todoId });
        res.json(removedTodo);
    }
    catch (error) {
        res.json({ message: error });
    }
}));
exports.default = todosRouter;
