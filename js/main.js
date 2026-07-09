import { addTask } from './tasks/addTask.js';
import { changePriority } from './modal/changePriority.js';
import { changeStatus } from './modal/changeStatus.js';
import { closeModal } from './modal/closeModal.js';
import { deleteTask } from './tasks/deleteTask.js';
import { editTask } from './tasks/editTask.js';
import { openModal } from './modal/openModal.js';
import { render } from './tasks/render.js';
import { closeModalBtn, forms, innersTasks, modalEditingTask, modalForm, modalInnerPriorities, modalInnerStatuses } from './view.js';

let task = null;

forms.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTask(form);
  });
});

innersTasks.forEach((innerTasks) => {
  innerTasks.addEventListener('click', (e) => {
    const isTaskText = e.target.classList.contains('todo__text');
    const isTaskDeleteBtn = e.target.classList.contains('todo__btn-delete');

    if (isTaskText) {
      task = e.target.closest('.todo__task');

      openModal(e.target);
    } else if (isTaskDeleteBtn) {
      deleteTask(e.target);
    }
  });
});

modalEditingTask.addEventListener('click', (e) => {
  const isModalClick = e.target.closest('.modal__inner');

  if (!isModalClick) {
    closeModal();
  }
});

closeModalBtn.addEventListener('click', () => {
  closeModal();
});

modalForm.addEventListener('submit', (e) => {
  e.preventDefault();

  editTask(e.target, task);
});

modalInnerStatuses.addEventListener('click', (e) => {
  changeStatus(e.target, task);
});

modalInnerPriorities.addEventListener('click', (e) => {
  changePriority(e.target, task);
});

render();
