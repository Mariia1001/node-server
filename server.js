const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const tasks = [];

function addTask(indicador, descripcion) {
  const id = tasks.length + 1;
  tasks.push({ id, indicador, descripcion, completada: false });
  return id;
}

function removeTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    return true;
  }
  return false;
}

function completeTask(id) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.completada = true;
    return true;
  }
  return false;
}

function getTasks() {
  return tasks;
}

app.get('/tasks', (req, res) => {
  res.json(getTasks());
});

app.post('/tasks', (req, res) => {
  const { indicador, descripcion } = req.body;
  const id = addTask(indicador, descripcion);
  res.json({ id, indicador, descripcion, completada: false });
});

app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const success = removeTask(id);
  res.json({ success });
});

app.put('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const success = completeTask(id);
  res.json({ success });
});

const port = 3000;
app.listen(port, () => {
  console.log(`se esta escuchando en: http://localhost:${port}`);
});
