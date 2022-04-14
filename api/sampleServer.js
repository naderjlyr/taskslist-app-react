const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB!"))
  .catch(console.error);

const Task = require("./models/Task");

app.get("/taskslist", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post("/task/new", (req, res) => {
  const task = new Task({
    text: req.body.text,
    complete: req.body.complete,
  });
  task.save();
  res.json(task);
});
app.delete("/task/delete/:id", async (req, res) => {
  const result = await Task.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.put("/task/complete/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.complete = !task.complete;
  task.save();
  res.json(task);
});
app.put("/task/edit/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.text = req.body.text;
  task.complete = req.body.complete;
  task.save();
  res.json(task);
});
app.listen(3001, () => console.log("server is started on port 3001"));
