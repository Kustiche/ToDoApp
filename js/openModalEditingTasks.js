import { modalEditingTask } from './view.js';

export function openModalEditingTasks(taskText) {
  const editingInput = modalEditingTask.querySelector('.modal__input-text');

  editingInput.value = taskText.textContent;
  modalEditingTask.showModal();
}
