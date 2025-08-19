const pool = require("../models/db");

async function getAllTasks(req, res) {
  try {
    const result = await pool.query(
      "SELECT *, task_date::date as task_date FROM tasks ORDER BY task_date"
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addTask(req,res){
    try {
    const { title, details, task_date } = req.body;
    const result = await pool.query(
      `INSERT INTO tasks (title, details, task_date) VALUES ($1, $2, $3) RETURNING *`,[title, details, task_date]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateTask(req,res){
    try {
    const { id } = req.params;
    const { title, details, completed } = req.body;
    await pool.query(
      `UPDATE tasks SET title = $1, details = $2, completed = $3 WHERE id = $4`,[title, details, completed, id]);
    res.json({ message: "Updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteTask(req,res){
    try {
    const { id } = req.params;
    await pool.query(`DELETE FROM tasks WHERE id = $1`, [id]);
    res.json({ message: "Deleted" }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}


module.exports={
    getAllTasks,
    addTask,
    updateTask,
    deleteTask,
}