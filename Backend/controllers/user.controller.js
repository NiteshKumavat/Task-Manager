import jwt from "jsonwebtoken";
import db from "../db.js";
import bcrypt from "bcryptjs";



export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existEmail = await db.query("SELECT * FROM users WHERE email = $1", [email]);

    if (existEmail.rows.length === 0) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const user = existEmail.rows[0];

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user.user_id }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);

  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, hashedPassword]
    );

    const token = jwt.sign({ id: newUser.rows[0].user_id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(201).json({ token });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const logout = (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};


export const getCurrentUser = async (req, res) => {
    const userId = req.user.id;

    try {
        const user = await db.query("SELECT user_id, username, email FROM users WHERE user_id = $1", [userId]);

        if (user.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user.rows[0]);
    } catch (error) {
        console.error("Error fetching current user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateCurrentUser = async (req, res) => {
    const userId = req.user.id;
    const { name, email } = req.body;

    try {
        const updatedUser = await db.query(
            "UPDATE users SET username = $1, email = $2 WHERE user_id = $3 RETURNING user_id, username, email",
            [name, email, userId]
        );

        if (updatedUser.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(updatedUser.rows[0]);
    } catch (error) {
        console.error("Error updating current user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteCurrentUser = async (req, res) => {
    const userId = req.user.id;

    try {
        await db.query("DELETE FROM users WHERE id = $1", [userId]);
        res.status(204).send();
    } catch (error) {
        console.error("Error deleting current user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
