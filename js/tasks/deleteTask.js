import { tasks } from '../main.js';
import { render } from './render.js';

export function deleteTask(deleteBtn) {
  const task = deleteBtn.closest('.todo__task');
  const taskId = task.id;

  tasks.splice(taskId, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  render();
}
