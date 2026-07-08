import { tasks } from '../main.js';

export function sortTasks() {
  tasks.sort((a, b) => {
    if (a.status[0] > b.status[0]) {
      return 1;
    } else if (a.status[0] < b.status[0]) {
      return -1;
    }
  });
}
