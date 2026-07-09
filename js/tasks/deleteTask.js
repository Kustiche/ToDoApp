import { tasks, updateTasksArray } from './updateTasksArray.js';
import { render } from './render.js';

export function deleteTask(deleteBtn) {
  const task = deleteBtn.closest('.todo__task');
  const taskId = Number(task.id);

  const newTasks = tasks.filter((el) => el.id !== taskId);

  updateTasksArray(newTasks);

  render();
}
