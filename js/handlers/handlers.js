import { renderApp } from '../ui/renderers/appRenderer.js';
import { addItemToStorage, removeItemToStorage } from '../services/data.js';
import { resetAppContainer } from '../utils/helpers.js';
import { getSortParams, updateSortState, getSortedStorage } from '../services/sort.js'
import { renderLoader, removeLoader } from '../ui/renderers/loaderRenderer.js';
import { renderTableBody } from '../ui/renderers/tableBodyRenderer.js';

//Обрабатывает отправку формы: добавляет продукт в хранилище и обновляет интерфейс
function handlerSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  try {
    addItemToStorage(formProps);
    const appEl = resetAppContainer();
    renderApp(appEl);
  } catch (error) {
    alert(error.message);
  }
}

//Обрабатывает клик на кнопку удаления элемента из таблицы и хранилища
function handlerDeleteButton(e) {
  const elementForDelete = e.target.closest('tr');

  try {
    removeItemToStorage(elementForDelete.id);
    elementForDelete.remove();
  } catch (error) {
    alert(error.message);
  }
}

//Обрабатывает клик на ссылку, ведущую к форме добавление новой записи в таблицу
async function handlerAddProduct(e) {
  e.preventDefault();

  const appEl = resetAppContainer();
  const loaderEl = renderLoader(appEl);

  try {
    const { renderForm } = await import('../ui/renderers/addFormRenderer.js');
    renderForm(appEl);
  } catch (error) {
    console.error('Ошибка при загрузке модуля:', error);
  } finally {
    removeLoader(loaderEl);
  }
}

//Обрабатывает клик по заголовку таблицы: сортирует данные и обновляет состояние сортировки
function handlerTheadTh(e, tableBodyEl) {
  const { sortKey, isNumericSort, ascending } = getSortParams(e);
  const sortedStorage = getSortedStorage(sortKey, isNumericSort, ascending);

  renderTableBody(sortedStorage, tableBodyEl);
  updateSortState(sortKey, ascending);
}

export {
  handlerSubmit,
  handlerDeleteButton,
  handlerAddProduct,
  handlerTheadTh,
}
