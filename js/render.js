import { tasks } from './main.js';
import { templateCloning } from './templateCloning.js';
import { innerHighPriority, innerLowPriority } from './view.js';

export function render() {
  const innerTasksLowPriorities = innerLowPriority.querySelector('.todo__inner-tasks');
  const innerTasksHighPriorities = innerHighPriority.querySelector('.todo__inner-tasks');

  innerTasksLowPriorities.innerHTML = '';
  innerTasksHighPriorities.innerHTML = '';

  tasks.forEach((task, id) => {
    const cloneTask = templateCloning(task, id);

    // innerTasks.append(cloneTask);
  });
}
