const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask(indicador, descripcion) {
  return new Promise((resolve, reject) => {
    tasks.push({ indicador, descripcion, completada: false });
    resolve();
  });
}

function removeTask(indicador) {
  return new Promise((resolve, reject) => {
    const index = tasks.findIndex(task => task.indicador === indicador);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
    resolve();
  });
}

function completeTask(indicador) {
  return new Promise((resolve, reject) => {
    const task = tasks.find(task => task.indicador === indicador);
    if (task) {
      task.completada = true;
    }
    resolve();
  });
}

function showTasks() {
  console.log('\nLista de tareas:');
  tasks.forEach(task => {
    console.log(`${task.indicador}: ${task.descripcion} - ${task.completada ? 'Completada' : 'Pendiente'}`);
  });
}


async function promptAction() {
  const action = await askQuestion('\nElige una acción (add/remove/complete/show/exit): ');
  switch (action) {
    case 'add':
      const indicador = await askQuestion('Indicador de la tarea: ');
      const descripcion = await askQuestion('Descripción de la tarea: ');
      await addTask(indicador, descripcion);
      promptAction();
      break;
    case 'remove':
      const indicadorToRemove = await askQuestion('Indicador de la tarea a eliminar: ');
      await removeTask(indicadorToRemove);
      promptAction();
      break;
    case 'complete':
      const indicadorToComplete = await askQuestion('Indicador de la tarea completada: ');
      await completeTask(indicadorToComplete);
      promptAction();
      break;
    case 'show':
      showTasks();
      promptAction();
      break;
    case 'exit':
      rl.close();
      break;
    default:
      console.log('Acción no válida. Inténtalo de nuevo.');
      promptAction();
      break;
  }
}

function askQuestion(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, answer => {
      resolve(answer);
    });
  });
}

console.log('Bienvenido a la lista de tareas!');
promptAction();

