import { handlerDeleteButton, handlerAddProduct } from '../../handlers/handlers.js';

/** Создает элемент главного заголовка (h1) */
function createTitleEl(text) {
  return createElement({
    tag: 'h1',
    classList: 'app__title',
    text,
  });
}

/** Создает элемент кнопки для отправки формы */
function createSubmitButtonEl() {
  return createElement({
    tag: 'button',
    classList: ['btn', 'app__add-btn'],
    text: 'Добавить запись',
    attributes: {
      type: 'submit',
    },
  });
}


/** Создает элемент кнопки с обработчиком события удаления элемента */
function createDeleteButtonEl() {
  return createElement({
    tag: 'button',
    classList: ['btn', 'table__delete-btn'],
    text: 'Удалить',
    attributes: {
      type: 'button',
    },
    events: {
      click: handlerDeleteButton,
    }
  })
}

/**
 * Создает верхнюю панель (top bar) интерфейса
 * Верхняя панель включает в себя заголовок ("Склад") и кнопку для добавления продукта
*/
function createTopBarEl() {
  const topBarEl = _createTopBarWrapEl();
  const titleEl = createTitleEl('Склад');
  const addProductEl = _createAddProductEl();

  topBarEl.append(titleEl, addProductEl);

  return topBarEl;
}

function _createTopBarWrapEl() {
  return createElement({
    tag: 'div',
    classList: 'app__top-bar',
  });
}

function _createAddProductEl() {
  const containerEl = _createLinkWrap();
  const linkEl = _createLink();

  containerEl.append(linkEl);

  return containerEl;
}

function _createLinkWrap() {
  return createElement({
    tag: 'div',
    classList: 'app__link-container',
  });
}

function _createLink() {
  return createElement({
    tag: 'a',
    classList: 'app__link',
    text: 'Добавить запись',
    attributes: {
      href: '#'
    },
    events: {
      click: handlerAddProduct,
    }
  })
}

/** Создает элемент лоадера (индикатора загрузки)*/
function createLoaderEl() {
  const loaderEl = createElement({
    tag: 'div',
    classList: 'loader',
    attributes: {
      id: 'loader',
    }
  });

  for (let i = 1; i <= 3; i++) {
    const divEl = createElement({tag: 'div'});
    loaderEl.append(divEl);
  }

  return loaderEl;
}

/** * Создает новый элемент DOM с заданными параметрами. * *
 * @param {object} options - Объект с параметрами для создания элемента. *
 * @param {string} options.tag - Тип тега элемента (обязательно). *
 * @param {(string|string[])} [options.classList] - Один или несколько классов для элемента. *
 * @param {string} [options.text] - Текстовое содержимое элемента. *
 * @param {Record<string, string>} [options.attributes] - Атрибуты элемента. *
 * @param {Record<string, Function|Function[]>} [options.events] - События и их обработчики. *
 * @throws {Error} Если параметр `tag` отсутствует. *
 * @returns {HTMLElement} Созданный элемент. */
function createElement(options) {
  const { tag, classList, text, attributes, events } = options;

  if (!tag) {
    throw new Error('Таг - обязательный пармаетр');
  }

  const element = document.createElement(tag);

  if (classList) {
    const classes = Array.isArray(classList) ? classList : [classList];
    element.classList.add(...classes);
  }

  if (text) element.textContent = text;

  if (attributes) {
    Object.entries(attributes).forEach(([attr, value]) => {
      element.setAttribute(attr, value);
    });
  }

  if (events) {
    Object.entries(events).forEach(([eventType, handlers]) => {
      if (Array.isArray(handlers)) {
        handlers.forEach(handler => element.addEventListener(eventType, handler));
      } else {
        element.addEventListener(eventType, handlers);
      }
    });
  }

  return element;
}

export {
  createTitleEl,
  createSubmitButtonEl,
  createDeleteButtonEl,
  createTopBarEl,
  createLoaderEl,
  createElement,
}
