import { STATUSES, template } from './view.js';

export function templateCloning(task, id) {
  const cloneTask = template.content.cloneNode(true);
  const templateTask = cloneTask.querySelector('.todo__task');
  const templateText = cloneTask.querySelector('.todo__text');
  const isStatusDone = task.status === STATUSES.DONE;
  const isStatusInProgress = task.status === STATUSES.IN_PROGRESS;

  templateTask.id = id;
  templateText.textContent = task.text;

  if (isStatusDone) {
    templateTask.style.border = '1px solid Green';
  } else if (isStatusInProgress) {
    templateTask.style.border = '1px solid Red';
  }

  return cloneTask;
}
