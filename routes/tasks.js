const express = require("express");
const router = express.Router();
const pool = require("../models/db");

const {getAllTasks,addTask,updateTask, deleteTask} =require("../controllers/function");
const {taskValidation}=require("../middleware/validate");


//gittt all tasks
router.get("/", getAllTasks);

//Add task
router.post("/", taskValidation,addTask);

//Update taskkk
router.put("/:id", updateTask);

//Delete task
router.delete("/:id", deleteTask);


module.exports = router;