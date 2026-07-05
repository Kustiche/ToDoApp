import { addTask } from './addTask.js';
import { closeModalEditingTasks } from './closeModalEditingTasks.js';
import { deleteTask } from './deleteTask.js';
import { openModalEditingTasks } from './openModalEditingTasks.js';
import { closeModalBtn, form, innerTasks, modalEditingTask } from './view.js';

export const tasks = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTask();
});

innerTasks.addEventListener('click', (e) => {
  const isTaskText = e.target.classList.contains('todo__text');
  const isTaskDeleteBtn = e.target.classList.contains('todo__btn-delete');

  if (isTaskText) {
    openModalEditingTasks(e.target);
  } else if (isTaskDeleteBtn) {
    deleteTask(e.target);
  }
});

modalEditingTask.addEventListener('click', (e) => {
  const isModalClick = e.target.closest('.modal__inner');

  if (!isModalClick) {
    closeModalEditingTasks();
  }
});

closeModalBtn.addEventListener('click', () => {
  closeModalEditingTasks();
});
