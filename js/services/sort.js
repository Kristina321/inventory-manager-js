import { getStorageList } from './data.js';

const sortState = {
  title: true, // true - по возрастанию, false - по убыванию
  shelf: true,
  weight: true,
  date: true,
};

/**
 * Обновляет статус сортировки для указанного ключа
 * Меняет направление сортировки (по возрастанию/убыванию) на противоположное
 * @param {string} sortKey - Ключ, для которого обновляется статус сортировки (например, 'title', 'weight')
 * @param {boolean} ascending - Текущее направление сортировки (true - по возрастанию, false - по убыванию)
*/
export function updateSortState(sortKey, ascending) {
  sortState[sortKey] = !ascending;
}

/**
 * Получает текущие параметры сортировки
 * Возвращает объект с этими параметрами
*/
export function getSortParams(e) {
  const sortKey = e.target.dataset.sort; // Получаем ключ для сортировки
  const isNumericSort = sortKey === 'weight'; // Проверяем, числовая ли сортировка
  const ascending = sortState[sortKey]; // Получаем текущее состояние сортировки

  return {
    sortKey,
    isNumericSort,
    ascending
  };
}

/**
 * Получает массив данных из хранилища и сортирует и возвращает его отсортированным
 * @param {string} sortKey - Ключ, по которому выполняется сортировка (например, 'title', 'weight')
 * @param {boolean} isNumericSort - Флаг, указывающий, является ли сортировка числовой
 * @param {boolean} ascending - Направление сортировки (true - по возрастанию, false - по убыванию)
*/
export function getSortedStorage(sortKey, isNumericSort, ascending) {
  const storage = getStorageList();
  return sortByKey(storage, sortKey, isNumericSort, ascending);
}

/**
 * Сортирует массив объектов по указанному ключу
 * Поддерживает как числовую, так и строковую сортировку, а также направление (по возрастанию/убыванию)
 * Использует метод `toSorted` для создания нового отсортированного массива (иммутабельно).
 * @param {Array<Object>} arr - Массив объектов, который нужно отсортировать
 * @param {string} sortKey - Ключ, по которому выполняется сортировка
 * @param {boolean} [isNumericSort=false] - Флаг, указывающий, является ли сортировка числовой (по умолчанию false)
 * @param {boolean} [ascending=true] - Направление сортировки (true - по возрастанию, false - по убыванию, по умолчанию true)
*/
function sortByKey(arr, sortKey, isNumericSort = false, ascending = true) {
  return arr.toSorted((a, b) => {
    let comparison;
    if (isNumericSort) {
      comparison = +a[sortKey] - +b[sortKey];
    } else {
      comparison = a[sortKey].localeCompare(b[sortKey]);
    }

    return ascending ? comparison : -comparison; //Возвращаем текущее направление сортировки
  });
}


