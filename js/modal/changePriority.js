import { closeModal } from './closeModal.js';
import { tasks } from '../tasks/updateTasksArray.js';
import { render } from '../tasks/render.js';
import { PRIORITIES } from '../view.js';

export function changePriority(target, task) {
  const isBtnHigh = target.textContent === 'Высокий приоритет';
  const isBtnLow = target.textContent === 'Низкий приоритет';

  tasks.forEach((el, id) => {
    const isIdTask = id === Number(task.id);

    if (isIdTask && isBtnHigh) {
      el.priority = PRIORITIES.HIGH;
    } else if (isIdTask && isBtnLow) {
      el.priority = PRIORITIES.LOW;
    }
  });

  if (isBtnHigh || isBtnLow) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    render();
    closeModal();
  }
}
