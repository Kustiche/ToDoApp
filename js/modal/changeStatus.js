import { closeModal } from './closeModal.js';
import { tasks } from '../main.js';
import { render } from '../tasks/render.js';
import { sortTasks } from '../tasks/sortTasks.js';
import { modalBtnDone, modalBtnInProgress, STATUSES } from '../view.js';

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
    sortTasks();
    localStorage.setItem('tasks', JSON.stringify(tasks));
    render();
    closeModal();
  }
}
