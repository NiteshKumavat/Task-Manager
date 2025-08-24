import db from "../db.js";

export const createTask = async (req, res) => {
  const { title, description, priority, start_date, end_date, progress } = req.body;
  const userId = req.user.id;

  try {
    const newTask = await db.query(
      "INSERT INTO tasks (title, description, start_date, end_date, priority, progress, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [title, description, start_date, end_date, priority, progress, userId]
    );
    res.status(201).json(newTask.rows[0]);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getTasks = async (req, res) => {
  const userId = req.user.id;

  try {
    const tasks = await db.query("SELECT * FROM tasks WHERE user_id = $1", [userId]);
    res.json(tasks.rows);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const getTaskById = async (req, res) => {
  const taskId = req.params.id;
  const userId = req.user.id;

  try {
    const task = await db.query("SELECT * FROM tasks WHERE task_id = $1 AND user_id = $2", [taskId, userId]);
    if (task.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task.rows[0]);
  } catch (error) {
    console.error("Error fetching task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export const updateTask = async (req, res) => {
  const taskId = req.params.id;
  const userId = req.user.id;
  const { title, description, priority, start_date, end_date, progress } = req.body;

  try {
    const updatedTask = await db.query(
      "UPDATE tasks SET title = $1, description = $2, priority = $3, start_date = $4, end_date = $5, progress = $6 WHERE task_id = $7 AND user_id = $8 RETURNING *",
      [title, description, priority, start_date, end_date, progress, taskId, userId]
    );

    if (updatedTask.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(updatedTask.rows[0]);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTask = async (req, res) => {
  const taskId = req.params.id;
  const userId = req.user.id;

  try {
    const deletedTask = await db.query(
      "DELETE FROM tasks WHERE task_id = $1 AND user_id = $2 RETURNING *",
      [taskId, userId]
    );

    if (deletedTask.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(204).send();
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
