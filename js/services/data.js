export function setStorageList(data) {
  localStorage.setItem('storage', JSON.stringify(data));
}

export function getStorageList() {
  return JSON.parse(localStorage.getItem('storage')) || [];
}

/**
 * Пробует добавить продукт в LocalStorage.
 * Создает новый элемент на основе переданных свойств, добавляет его в хранилище и сохраняет обновленный список в LocalStorage.
 * @param {Object} itemProps - Свойства продукта, которые нужно добавить.
 * @throws {Error} - Выбрасывает ошибку, если добавление не удалось
*/
export function addItemToStorage(itemProps) {
  try {
    const storage = getStorageList();
    const storageItem = { id: crypto.randomUUID(), ...itemProps }
    storage.push(storageItem);

    setStorageList(storage);
  } catch (error) {
    console.error('Ошибка при добавлении элемента в хранилище:', error);
    throw new Error('Продукт не добавлен. Пожалуйста, попробуйте ещё раз.');
  }
}

/**
 * Пробует удалить продукт из LocalStorage по его идентификатору
 * @throws {Error} - Выбрасывает ошибку, если удаление не удалось
*/
export function removeItemToStorage(id) {
  try {
    let storage = getStorageList();
    storage = storage.filter(item => item.id !== id);

    setStorageList(storage);
  } catch (error) {
    console.error('Ошибка при удалении элемента из хранилища:', error);
    throw new Error('Продукт не удален. Пожалуйста, попробуйте ещё раз.');
  }
}
