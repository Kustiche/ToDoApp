import { closeModalEditingTasks } from './closeModalEditingTasks.js';
import { tasks } from './main.js';
import { render } from './render.js';
import { PRIORITIES } from './view.js';

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
    closeModalEditingTasks();
  }
}
