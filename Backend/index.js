import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});
import express from "express";
import db from "./db.js"; 
import { login, register, logout, getCurrentUser, updateCurrentUser, deleteCurrentUser } from "./controllers/user.controller.js";
import { createTask, getTasks, getTaskById, updateTask, deleteTask } from "./controllers/task.controller.js";
import { authenticateToken } from "./middleware/auth.middleware.js"; 

const JWT_SECRET = process.env.JWT_SECRET

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


app.post("/tasks", authenticateToken, createTask)
app.get("/tasks", authenticateToken, getTasks)
app.get("/tasks/:id", authenticateToken, getTaskById)
app.put("/tasks/:id", authenticateToken, updateTask)
app.delete("/tasks/:id", authenticateToken, deleteTask)




app.listen(port, () => {
    console.log("port is running on http://localhost:5000")
})