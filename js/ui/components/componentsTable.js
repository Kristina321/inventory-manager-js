import { createElement, createDeleteButtonEl } from './components.js';
import { getThConfig } from '../../services/fieldConfig.js';

/**
 * Создает структуру таблицы, включая элементы таблицы (`table`), заголовка (`thead`) и тела (`tbody`).
 * Возвращает объект с созданными элементами для дальнейшего использования.
 */
export function createTableStructure() {
  const tableEl = createTableEl();
  const theadEl = createTableHeaderEl();
  const tbodyEl = createTbody();

  tableEl.append(theadEl, tbodyEl);

  return {
    tableEl,
    theadEl,
    tbodyEl,
  }
}

/** Создает элемент строки таблицы (`<tr>`) с указанным идентификатором */
export function createTableRowEl(id = '') {
  const rowEl = createElement({
    tag: 'tr',
    attributes: {
      id,
    },
  });

  return rowEl;
}

/** Создает массив ячеек таблицы (`<td>`) на основе данных из объекта.
 * @param {Object} storageObj - Объект с данными, на основе которых создаются ячейки.
*/
export function createDataCells(storageObj) {
  const storageObjCopy = { ...storageObj };
  delete storageObjCopy.id;

  const cells = Object.values(storageObjCopy).map(item => {
    return createTdEl(item);
  });

  return cells;
}

/** Создает элемент строки таблицы (`<td>`) с кнопкой для удаления элемента */
export function createCellWithButton() {
  const tdEl = createTdEl();
  const deleteButtonEl = createDeleteButtonEl();

  tdEl.append(deleteButtonEl);

  return tdEl;
}

function createTableEl() {
  return createElement({
    tag: 'table',
    classList: 'table',
    attributes: {
      id: 'storage-table',
    },
  })
}

function createTableHeaderEl() {
  const theadEl = createTheadEl();
  const trEl = createTableRowEl();
  const thConfigs = getThConfig();

  //создаём массив с элементами th
  const thElements = thConfigs.map(({field, label, event }) => createThEl(field, label, event));

  trEl.append(...thElements);
  theadEl.append(trEl);

  return theadEl;
}

function createTheadEl() {
  return createElement({
    tag: 'thead',
    attributes: {
      id: 'storage-thead',
    },
  })
}

function createThEl(data, text, event) {
  return createElement({
    tag: 'th',
    classList: 'table__thead-th',
    text,
    attributes: { id: `${data}-th`, 'data-sort': data },
    events: { click: event }
  })
}

function createTbody() {
  return createElement({
    tag: 'tbody',
    attributes: {
      id: 'storage-tbody',
    },
  })
}

function createTdEl(text = '') {
  return createElement({
    tag: 'td',
    text,
  })
}
