import { addTask } from './addTask.js';
import { form } from './view.js';

export const tasks = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTask();
});
