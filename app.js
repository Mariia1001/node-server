const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask(indicador, descripcion) {
  tasks.push({ indicador, descripcion, completada: false });
}

function removeTask(indicador) {
  const index = tasks.findIndex(task => task.indicador === indicador);
  if (index !== -1) {
    tasks.splice(index, 1);
  }
}

function completeTask(indicador) {
  const task = tasks.find(task => task.indicador === indicador);
  if (task) {
    task.completada = true;
  }
}

function showTasks() {
  console.log('\nLista de tareas:');
  tasks.forEach(task => {
    console.log(`${task.indicador}: ${task.descripcion} - ${task.completada ? 'Completada' : 'Pendiente'}`);
  });
}

function promptAction() {
  rl.question('\nElige una acción (agregar/eliminar/completada/mostrar/cerrar): ', action => {
    switch (action) {
      case 'agregar':
        rl.question('Indicador de la tarea: ', indicador => {
          rl.question('Descripción de la tarea: ', descripcion => {
            addTask(indicador, descripcion);
            promptAction();
          });
        });
        break;
      case 'eliminar':
        rl.question('Indicador de la tarea a eliminar: ', indicador => {
          removeTask(indicador);
          promptAction();
        });
        break;
      case 'completada':
        rl.question('Indicador de la tarea completada: ', indicador => {
          completeTask(indicador);
          promptAction();
        });
        break;
      case 'mostrar':
        showTasks();
        promptAction();
        break;
      case 'cerrar':
        rl.close();
        break;
      default:
        console.log('Acción no válida. Inténtalo de nuevo.');
        promptAction();
        break;
    }
  });
}

console.log('Bienvenid@s a la lista de tareas!');
promptAction();
