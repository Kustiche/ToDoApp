export const STATUSES = {
  IN_PROGRESS: 'В процессе',
  DONE: 'Завершена',
};

export const PRIORITIES = {
  HIGH: 'High',
  LOW: 'Low',
};

export const closeModalBtn = document.querySelector('.modal__btn-close');
export const modalForm = document.querySelector('.modal__form');

export const forms = document.querySelectorAll('.form');
export const innersTasks = document.querySelectorAll('.todo__inner-tasks');

export const innerHighPriority = document.getElementById('highPriority');
export const innerLowPriority = document.getElementById('lowPriority');
export const template = document.getElementById('task');
export const modalEditingTask = document.getElementById('modalTaskEditing');
