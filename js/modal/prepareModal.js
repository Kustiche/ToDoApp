import { tasks } from '../main.js';
import {
  COLORS,
  modalBtnDone,
  modalBtnHigh,
  modalBtnInProgress,
  modalBtnLow,
  modalBtns,
  modalEditingTask,
  PRIORITIES,
  STATUSES,
} from '../view.js';

export function prepareModal(taskText) {
  const editingInput = modalEditingTask.querySelector('.modal__input-text');

  editingInput.value = taskText.textContent;

  tasks.forEach((task) => {
    const isTask = task.text === taskText.textContent;
    const isTaskDone = task.status === STATUSES.DONE;
    const isTaskInProgress = task.status === STATUSES.IN_PROGRESS;
    const isTaskHigh = task.priority === PRIORITIES.HIGH;
    const isTaskLow = task.priority === PRIORITIES.LOW;

    modalBtns.forEach((btn) => {
      if (isTask) {
        btn.style.backgroundColor = '';
      }
    });

    if (isTask && isTaskDone) {
      modalBtnDone.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    } else if (isTask && isTaskInProgress) {
      modalBtnInProgress.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    }

    if (isTask && isTaskHigh) {
      modalBtnHigh.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    } else if (isTask && isTaskLow) {
      modalBtnLow.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    }
  });
}
