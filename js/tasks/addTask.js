import { tasks } from '../main.js';
import { render } from './render.js';
import { sortTasks } from './sortTasks.js';
import { innerHighPriority, PRIORITIES, STATUSES } from '../view.js';

export function addTask(form) {
  const isInnerHighPriority = form.closest('#highPriority');
  const isInnerLowPriority = form.closest('#lowPriority');
  const input = form.querySelector('.form__input-text');
  const inputText = input.value.trim().replace(/\s+/g, ' ');
  const isInputText = inputText === '';

  var taskId = JSON.parse(localStorage.getItem('taskId')) ?? 0;

  if (isInputText) {
    alert('Error: Нельзя создать пустую задачу');
  } else {
    tasks.push({
      text: inputText,
      status: STATUSES.IN_PROGRESS,
      priority: isInnerHighPriority ? PRIORITIES.HIGH : PRIORITIES.LOW,
      id: taskId,
    });
    taskId++;
    input.value = '';

    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskId', JSON.stringify(taskId));
  }

  sortTasks();
  render();
}
