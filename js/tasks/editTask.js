import { closeModal } from '../modal/closeModal.js';
import { tasks } from './updateTasksArray.js';
import { render } from './render.js';

export function editTask(target, task) {
  const modalInputForm = target.querySelector('.modal__input-text');
  const modalInputValue = modalInputForm.value.trim().replace(/\s+/g, ' ');
  const isModalInputValue = modalInputValue === '';

  if (isModalInputValue) {
    alert('Error: Нельзя создать пустую задачу');
  } else {
    tasks.forEach((el) => {
      const isIdTask = el.id === Number(task.id);

      if (isIdTask) {
        el.text = modalInputValue;
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  render();
  closeModal();
}
