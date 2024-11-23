import axios from "axios";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a new instance of axios
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

// handle errors at code level
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Make a request to todos endpoint
instance.get("/todos/1").then((response) => {
  // data from response
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  LogTodo(id, title, completed);
});

const LogTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Todo ID: ${id}
    Title: ${title}
    Completed: ${completed}
    `);
}