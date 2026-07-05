import { closeModalEditingTasks } from './closeModalEditingTasks.js';
import { tasks } from './main.js';
import { render } from './render.js';

export function editingTask(target, task) {
  const modalInputForm = target.querySelector('.modal__input-text');
  const modalInputValue = modalInputForm.value;
  const taskText = task.textContent;

  tasks.forEach((el, id) => {
    if (el === taskText) {
      tasks[id] = modalInputValue;
    }
  });

  render();
  closeModalEditingTasks();
}
