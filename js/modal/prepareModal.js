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
  const innerTask = taskText.closest('.todo__task');

  editingInput.value = taskText.textContent;

  tasks.forEach((task, id) => {
    const isTask = task.text === taskText.textContent;
    const isTaskId = id === Number(innerTask.id);
    const isTaskDone = task.status === STATUSES.DONE;
    const isTaskInProgress = task.status === STATUSES.IN_PROGRESS;
    const isTaskHigh = task.priority === PRIORITIES.HIGH;
    const isTaskLow = task.priority === PRIORITIES.LOW;

    modalBtns.forEach((btn) => {
      if (isTask && isTaskId) {
        btn.style.backgroundColor = '';
      }
    });

    if (isTask && isTaskId && isTaskDone) {
      modalBtnDone.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    } else if (isTask && isTaskId && isTaskInProgress) {
      modalBtnInProgress.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    }

    if (isTask && isTaskId && isTaskHigh) {
      modalBtnHigh.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    } else if (isTask && isTaskId && isTaskLow) {
      modalBtnLow.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    }
  });
}
