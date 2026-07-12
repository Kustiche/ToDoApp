import { closeModal } from './closeModal.js';
import { tasks } from '../tasks/updateTasksArray.js';
import { render } from '../tasks/render.js';
import { sortTasks } from '../tasks/sortTasks.js';
import { STATUSES } from '../view.js';
import { saveData } from '../tasks/saveData.js';

export function changeStatus(target, task) {
  const isBtnDone = target.textContent === 'Завершена';
  const isBtnInProgress = target.textContent === 'В процессе';

  tasks.forEach((el) => {
    const isIdTask = el.id === Number(task.id);

    if (isIdTask && isBtnDone) {
      el.status = STATUSES.DONE;
    } else if (isIdTask && isBtnInProgress) {
      el.status = STATUSES.IN_PROGRESS;
    }
  });

  if (isBtnDone || isBtnInProgress) {
    sortTasks();
    saveData('tasks', tasks);
    render();
    closeModal();
  }
}
