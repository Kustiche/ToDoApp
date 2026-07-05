import { tasks } from './main.js';
import { templateCloning } from './templateCloning.js';
import { innerHighPriority, innerLowPriority } from './view.js';

export function render() {
  const innerTasksHighPriorities = innerHighPriority.querySelector('.todo__inner-tasks');
  const innerTasksLowPriorities = innerLowPriority.querySelector('.todo__inner-tasks');

  innerTasksHighPriorities.innerHTML = '';
  innerTasksLowPriorities.innerHTML = '';

  tasks.forEach((task, id) => {
    const cloneTask = templateCloning(task, id);

    if (task.priority === 'Высокий') {
      innerTasksHighPriorities.append(cloneTask);
    } else {
      innerTasksLowPriorities.append(cloneTask);
    }
  });
}
