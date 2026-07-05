import { addTask } from './addTask.js';
import { closeModalEditingTasks } from './closeModalEditingTasks.js';
import { deleteTask } from './deleteTask.js';
import { editingTask } from './editingTask.js';
import { openModalEditingTasks } from './openModalEditingTasks.js';
import { render } from './render.js';
import { closeModalBtn, forms, modalEditingTask, modalForm } from './view.js';

export const tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];

console.log(JSON.parse(localStorage.getItem('tasks')));

let task = null;

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTask(form);
  });
});

// innerTasks.addEventListener('click', (e) => {
//   const isTaskText = e.target.classList.contains('todo__text');
//   const isTaskDeleteBtn = e.target.classList.contains('todo__btn-delete');

//   if (isTaskText) {
//     task = e.target;

//     openModalEditingTasks(e.target);
//   } else if (isTaskDeleteBtn) {
//     deleteTask(e.target);
//   }
// });

modalEditingTask.addEventListener('click', (e) => {
  const isModalClick = e.target.closest('.modal__inner');

  if (!isModalClick) {
    closeModalEditingTasks();
  }
});

closeModalBtn.addEventListener('click', () => {
  closeModalEditingTasks();
});

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();

  editingTask(e.target, task);
});

render();
