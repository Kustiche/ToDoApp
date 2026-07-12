export function saveData(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
