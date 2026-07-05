import { tasks } from './main.js';
import { render } from './render.js';
import { input } from './view.js';

export function addTask() {
  const inputText = input.value.trim().replace(/\s+/g, ' ');
  const isInputText = inputText === '';

  if (isInputText) {
    alert('Error: Нельзя создать пустую задачу');
  } else {
    tasks.push(inputText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
  }

  render();
}
