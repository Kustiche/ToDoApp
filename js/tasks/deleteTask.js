import { tasks } from '../main.js';
import { render } from './render.js';

export function deleteTask(deleteBtn) {
  const task = deleteBtn.closest('.todo__task');
  const taskId = Number(task.id);

  const newTasks = tasks.filter((el) => el.id !== taskId);

  localStorage.setItem('tasks', JSON.stringify(newTasks));

  render(newTasks);
}
