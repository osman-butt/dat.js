import axios from "axios";
import Todo from "./models/todo";

class TodoService {
  http = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  async getAll() {
    const response = await this.http.get<Todo[]>("/todos");
    return response.data;
  }
}

export default new TodoService(); // exporting instance of the class
