import { prepareModal } from './prepareModal.js';
import { modalEditingTask } from '../view.js';

export function openModal(taskText) {
  prepareModal(taskText);

  modalEditingTask.showModal();
}
