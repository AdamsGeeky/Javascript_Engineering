"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();
// Create a new instance of axios
var instance = axios_1.default.create({
    baseURL: process.env.BASE_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});
// Make a request to todos endpoint
instance.get("/todos/1").then(function (response) {
    // data from response
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    LogTodo(id, title, completed);
});
var LogTodo = function (id, title, completed) {
    console.log("\n    Todo ID: ".concat(id, "\n    Title: ").concat(title, "\n    Completed: ").concat(completed, "\n    "));
};
