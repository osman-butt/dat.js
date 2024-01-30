"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
exports.default = () => {
    if (!process.env.MONGO_URI) {
        throw new Error("No mongo connection string. Set MONGODB_URI environment variable.");
    }
    mongoose_1.default
        .connect(process.env.MONGO_URI)
        .then(() => console.log("MongoDB connected..."))
        .catch((err) => console.log(err));
};
