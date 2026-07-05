import { tasks } from './main.js';
import { templateCloning } from './templateCloning.js';
import { innerTasks } from './view.js';

export function render() {
  innerTasks.innerHTML = '';

  tasks.forEach((task) => {
    const cloneTask = templateCloning(task);

    innerTasks.append(cloneTask);
  });
}
