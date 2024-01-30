import mongoose from "mongoose";

export default () => {
  if (!process.env.MONGO_URI) {
    throw new Error(
      "No mongo connection string. Set MONGODB_URI environment variable."
    );
  }
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
};
