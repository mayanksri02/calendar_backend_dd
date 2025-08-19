const express=require("express");
const cors=require("cors");
const app=express();
const tasksRoutes = require("./routes/tasks");
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

const port=process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});