import { tasks } from './main.js';
import { modalBtnDone, modalBtnHigh, modalBtnInProgress, modalBtnLow, modalEditingTask, PRIORITIES, STATUSES } from './view.js';

export function preparingModalBeforeOpening(taskText) {
  const editingInput = modalEditingTask.querySelector('.modal__input-text');

  editingInput.value = taskText.textContent;

  tasks.forEach((task) => {
    const isTask = task.text === taskText.textContent;
    const isTaskDone = task.status === STATUSES.DONE;
    const isTaskInProgress = task.status === STATUSES.IN_PROGRESS;
    const isTaskHigh = task.priority === PRIORITIES.HIGH;
    const isTaskLow = task.priority === PRIORITIES.LOW;

    if (isTask && isTaskDone) {
      modalBtnDone.style.backgroundColor = '#5F646D';
      modalBtnInProgress.style.backgroundColor = '';
    } else if (isTask && isTaskInProgress) {
      modalBtnInProgress.style.backgroundColor = '#5F646D';
      modalBtnDone.style.backgroundColor = '';
    }

    if (isTask && isTaskHigh) {
      modalBtnHigh.style.backgroundColor = '#5F646D';
      modalBtnLow.style.backgroundColor = '';
    } else if (isTask && isTaskLow) {
      modalBtnLow.style.backgroundColor = '#5F646D';
      modalBtnHigh.style.backgroundColor = '';
    }
  });
}
