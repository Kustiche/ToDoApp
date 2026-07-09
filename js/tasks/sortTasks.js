import { tasks } from '../main.js';
import { STATUS_ORDER } from '../view.js';

export function sortTasks() {
  tasks.sort((a, b) => STATUS_ORDER[a.status] - STATUS_ORDER[b.status]);
}
