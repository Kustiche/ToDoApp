import { saveData } from './saveData';

export var tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

export function updateTasksArray(array) {
  tasks = array;

  saveData('tasks', tasks);
}
