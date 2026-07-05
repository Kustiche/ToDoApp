import { tasks } from './main.js';
import { render } from './render.js';

export function deleteTask(deleteBtn) {
  const task = deleteBtn.closest('.todo__task');
  const taskText = task.querySelector('.todo__text').textContent;

  const taskId = tasks.findIndex((task) => task === taskText);

  tasks.splice(taskId, 1);

  render();
}
