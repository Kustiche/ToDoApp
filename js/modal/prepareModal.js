import { tasks } from '../tasks/updateTasksArray.js';
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

  tasks.forEach((task) => {
    const isTaskId = task.id === Number(innerTask.id);
    const isTaskDone = task.status === STATUSES.DONE;
    const isTaskInProgress = task.status === STATUSES.IN_PROGRESS;
    const isTaskHigh = task.priority === PRIORITIES.HIGH;
    const isTaskLow = task.priority === PRIORITIES.LOW;

    modalBtns.forEach((btn) => {
      if (isTaskId) {
        btn.style.backgroundColor = '';
      }
    });

    if (isTaskId && isTaskDone) {
      modalBtnDone.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    } else if (isTaskId && isTaskInProgress) {
      modalBtnInProgress.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    }

    if (isTaskId && isTaskHigh) {
      modalBtnHigh.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    } else if (isTaskId && isTaskLow) {
      modalBtnLow.style.backgroundColor = COLORS.SHUTTLE_GRAY;
    }
  });
}
