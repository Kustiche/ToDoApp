import { template } from './view.js';

export function templateCloning(task) {
  const cloneTask = template.content.cloneNode(true);

  cloneTask.querySelector('.todo__text').textContent = task;

  return cloneTask;
}
