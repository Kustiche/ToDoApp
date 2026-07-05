import { closeModalEditingTasks } from './closeModalEditingTasks.js';
import { tasks } from './main.js';
import { render } from './render.js';
import { sortingTasks } from './sortingTasks.js';
import { modalBtnDone, modalBtnInProgress, STATUSES } from './view.js';

export function changeStatus(target, task) {
  const isBtnDone = target.textContent === 'Завершена';
  const isBtnInProgress = target.textContent === 'В процессе';

  tasks.forEach((el, id) => {
    const isIdTask = id === Number(task.id);

    if (isIdTask && isBtnDone) {
      el.status = STATUSES.DONE;
    } else if (isIdTask && isBtnInProgress) {
      el.status = STATUSES.IN_PROGRESS;
    }
  });

  if (isBtnDone || isBtnInProgress) {
    sortingTasks();
    render();
    closeModalEditingTasks();
  }
}
