import { tasks } from './updateTasksArray.js';
import { render } from './render.js';
import { sortTasks } from './sortTasks.js';
import { PRIORITIES, STATUSES } from '../view.js';
import { saveData } from './saveData.js';

export function addTask(form) {
  const isInnerHighPriority = form.closest('#highPriority');
  const input = form.querySelector('.form__input-text');
  const inputText = input.value.trim().replace(/\s+/g, ' ');
  const isInputText = inputText === '';

  if (isInputText) {
    alert('Error: Нельзя создать пустую задачу');
  } else {
    tasks.push({
      text: inputText,
      status: STATUSES.IN_PROGRESS,
      priority: isInnerHighPriority ? PRIORITIES.HIGH : PRIORITIES.LOW,
      id: Date.now(),
    });
    input.value = '';

    saveData('tasks', tasks);

    sortTasks();
    render();
  }
}
