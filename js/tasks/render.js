import { templateCloning } from './templateCloning.js';
import { innerHighPriority, innerLowPriority, PRIORITIES } from '../view.js';
import { tasks } from './updateTasksArray.js';

export function render() {
  const innerTasksHighPriorities = innerHighPriority.querySelector('.todo__inner-tasks');
  const innerTasksLowPriorities = innerLowPriority.querySelector('.todo__inner-tasks');

  innerTasksHighPriorities.innerHTML = '';
  innerTasksLowPriorities.innerHTML = '';

  tasks.forEach((task, id) => {
    const cloneTask = templateCloning(task, id);
    const isPriorityHigh = task.priority === PRIORITIES.HIGH;
    const isPriorityLow = task.priority === PRIORITIES.LOW;

    if (isPriorityHigh) {
      innerTasksHighPriorities.append(cloneTask);
    } else if (isPriorityLow) {
      innerTasksLowPriorities.append(cloneTask);
    }
  });
}
