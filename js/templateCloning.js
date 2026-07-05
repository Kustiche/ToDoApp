import { template } from './view.js';

export function templateCloning(task, id) {
  const cloneTask = template.content.cloneNode(true);

  cloneTask.querySelector('.todo__task').id = id;
  cloneTask.querySelector('.todo__text').textContent = task.text;

  return cloneTask;
}
