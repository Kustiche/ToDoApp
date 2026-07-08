import { tasks } from '../main.js';
import { render } from './render.js';
import { sortingTasks } from './sortingTasks.js';
import { innerHighPriority, PRIORITIES, STATUSES } from '../view.js';

export function addTask(form) {
  const isInnerHighPriority = form.closest('#highPriority');
  const isInnerLowPriority = form.closest('#lowPriority');
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
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
  }

  sortingTasks();
  render();
}
