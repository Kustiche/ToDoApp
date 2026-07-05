import { tasks } from './main.js';
import { render } from './render.js';
import { input } from './view.js';

export function addTask() {
  const inputText = input.value;

  tasks.push(inputText);

  render();
}
