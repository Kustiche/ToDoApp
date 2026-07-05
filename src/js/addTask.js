import { tasks } from './main.js';
import { input } from './view.js';

export function addTask() {
  const inputText = input.value;

  tasks.push(inputText);
}
