import { tasks } from './main.js';
import { templateCloning } from './templateCloning.js';
import { innerTasks } from './view.js';

export function render() {
  innerTasks.innerHTML = '';

  tasks.forEach((task, id) => {
    const cloneTask = templateCloning(task, id);

    innerTasks.append(cloneTask);
  });
}
