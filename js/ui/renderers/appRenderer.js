import { createTopBarEl } from '../components/components.js';
import { renderTableBody } from './tableBodyRenderer.js';
import { createTableStructure } from '../components/componentsTable.js';
import { getStorageList } from '../../services/data.js';
import { handlerTheadTh } from '../../handlers/handlers.js';

/**
 * Рендерит основную структуру приложения в указанный контейнер
 */
export function renderApp(container) {
  const topBarEl = createTopBarEl();
  const { tableEl, tbodyEl, theadEl } = createTableStructure();
  const storage = getStorageList();

  container.append(topBarEl, tableEl);
  renderTableBody(storage, tbodyEl);

  theadEl.querySelectorAll('th:not(#action-th)').forEach(element => {
    element.addEventListener('click', (e) => handlerTheadTh(e, tbodyEl));
  });
}
