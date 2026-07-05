import { closeModalEditingTasks } from './closeModalEditingTasks.js';
import { tasks } from './main.js';
import { render } from './render.js';

export function editingTask(target, task) {
  const modalInputForm = target.querySelector('.modal__input-text');
  const modalInputValue = modalInputForm.value.trim().replace(/\s+/g, ' ');
  const taskText = task.textContent;
  const isModalInputValue = modalInputValue === '';

  if (isModalInputValue) {
    alert('Error: Нельзя иметь пустую задачу');
  } else {
    tasks.forEach((el, id) => {
      if (el === taskText) {
        tasks[id] = modalInputValue;
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render();
  closeModalEditingTasks();
}
