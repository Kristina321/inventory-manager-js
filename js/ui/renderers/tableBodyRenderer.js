import { createTableRowEl, createDataCells, createCellWithButton } from '../components/componentsTable.js';

/**
 * * Рендерит тело таблицы, заполняя его строками на основе данных из хранилища
 * @param {Array<Object>} storage - Массив объектов с данными для отображения в таблице.
 * @param {HTMLElement} tableBodyEl - Элемент тела таблицы (`<tbody>`), который будет заполнен данными
*/
export function renderTableBody(storage, tableBodyEl) {
  tableBodyEl.innerHTML = '';

  storage.forEach((storageObj) => {
    const rowEl = createTableRowEl(storageObj.id);
    const cells = createDataCells(storageObj);
    const cellWithButton = createCellWithButton();

    cells.forEach(cell => rowEl.appendChild(cell));
    rowEl.appendChild(cellWithButton);

    tableBodyEl.appendChild(rowEl);
  });
}

