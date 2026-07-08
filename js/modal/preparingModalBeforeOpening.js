import { tasks } from '../main.js';
import { modalBtnDone, modalBtnHigh, modalBtnInProgress, modalBtnLow, modalBtns, modalEditingTask, PRIORITIES, STATUSES } from '../view.js';

export function preparingModalBeforeOpening(taskText) {
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
      modalBtnDone.style.backgroundColor = '#5F646D';
    } else if (isTask && isTaskInProgress) {
      modalBtnInProgress.style.backgroundColor = '#5F646D';
    }

    if (isTask && isTaskHigh) {
      modalBtnHigh.style.backgroundColor = '#5F646D';
    } else if (isTask && isTaskLow) {
      modalBtnLow.style.backgroundColor = '#5F646D';
    }
  });
}
