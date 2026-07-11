import { COLORS, STATUSES, STYLES_TEXT_DECORATION, template } from '../view.js';

export function templateCloning(task) {
  const cloneTask = template.content.cloneNode(true);
  const templateTask = cloneTask.querySelector('.todo__task');
  const templateText = cloneTask.querySelector('.todo__text');
  const isStatusDone = task.status === STATUSES.DONE;

  templateTask.id = task.id;
  templateText.textContent = task.text;

  if (isStatusDone) {
    templateText.style.textDecoration = STYLES_TEXT_DECORATION.LINE_THROUGH;
    templateText.style.color = COLORS.SILVER_CHALICE;
  }

  return cloneTask;
}
