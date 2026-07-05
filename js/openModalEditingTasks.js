import { preparingModalBeforeOpening } from './preparingModalBeforeOpening.js';
import { modalEditingTask } from './view.js';

export function openModalEditingTasks(taskText) {
  preparingModalBeforeOpening(taskText);

  modalEditingTask.showModal();
}
