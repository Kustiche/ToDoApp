import { addTask } from './addTask.js';
import { deleteTask } from './deleteTask.js';
import { form, innerTasks } from './view.js';

export const tasks = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTask();
});

innerTasks.addEventListener('click', (e) => {
  const isDeleteBtn = e.target.classList.contains('todo__btn-delete');

  if (isDeleteBtn) {
    deleteTask(e.target);
  }
});
