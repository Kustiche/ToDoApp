import { addTask } from './addTask.js';
import { deleteTask } from './deleteTask.js';
import { openEditingModal } from './openEditingModal.js';
import { form, innerTasks } from './view.js';

export const tasks = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTask();
});

innerTasks.addEventListener('click', (e) => {
  const isTaskText = e.target.classList.contains('todo__text');
  const isTaskDeleteBtn = e.target.classList.contains('todo__btn-delete');

  if (isTaskText) {
    openEditingModal(e.target);
  } else if (isTaskDeleteBtn) {
    deleteTask(e.target);
  }
});
