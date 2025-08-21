import express from "express";
import db from "./db";
import { login, register, logout, getCurrentUser, updateCurrentUser, deleteCurrentUser } from "./controllers/user.controller";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "./controllers/task.controller";

const JWT_SECRET = "your_secret_key"

db.connect()
  .then(() => console.log("✅ Connected to PostgreSQL"))
  .catch((err) => console.error("❌ Connection error", err.stack));

const app = express()
app.use(express.json())

const port = 5000

app.post("/users/register", register)
app.post("/users/login", login)
app.post("/users/logout", logout)

app.get("/users/me", getCurrentUser)
app.put("/users/me", updateCurrentUser)
app.delete("/users/me", deleteCurrentUser)


app.post("/tasks", createTask)
app.get("/tasks", getTasks)
app.get("/tasks/:id", getTaskById)
app.put("/tasks/:id", updateTask)
app.delete("/tasks/:id", deleteTask)




app.listen(port, () => {
    console.log("port is running on http://localhost:5000")
})