export const STATUSES = {
  IN_PROGRESS: 'В процессе',
  DONE: 'Завершена',
};

export const PRIORITIES = {
  HIGH: 'Высокий',
  LOW: 'Низкий',
};

export const closeModalBtn = document.querySelector('.modal__btn-close');
export const modalForm = document.querySelector('.modal__form');
export const modalInnerStatuses = document.querySelector('.modal__inner-statuses');

export const forms = document.querySelectorAll('.form');
export const innersTasks = document.querySelectorAll('.todo__inner-tasks');

export const innerHighPriority = document.getElementById('highPriority');
export const innerLowPriority = document.getElementById('lowPriority');
export const modalBtnDone = document.getElementById('Done');
export const modalBtnInProgress = document.getElementById('InProgress');
export const modalBtnLow = document.getElementById('Low');
export const modalBtnHigh = document.getElementById('High');
export const template = document.getElementById('task');
export const modalEditingTask = document.getElementById('modalTaskEditing');
