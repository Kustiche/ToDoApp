export var tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

export function updateTasksArray(array) {
  tasks = array;

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
