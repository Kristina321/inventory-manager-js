import { createElement } from './components.js';

/** Создает элемент form */
export function createFormEl() {
  return createElement({
    tag: 'form',
    classList: 'add-form',
    attributes: {
      action: '',
      //method: 'post',
      id: 'add-form',
      name: 'add-form'
    },
  });
}

/** Создает элемент поля ввода (input field) с меткой (label) и сообщением об ошибке (error span)
 * @param {string} fieldKey - Уникальный ключ поля, который используется для создания атрибутов `id`, `for` и `name` и т.д.
 * @param {string} type - Тип поля ввода (например, 'text', 'email', 'password')
 * @param {string} placeholder - Плейсхолдер для поля ввода
 */
export function createInputFieldEl(fieldKey, type, placeholder) {
  const labelEl = createLabelEl(fieldKey);
  const inputEl = createInputEl(fieldKey, type, placeholder);
  const errorSpan = createErrorSpanEl(fieldKey);

  labelEl.append(inputEl, errorSpan);

  return labelEl;
}

function createLabelEl(fieldKey) {
  return createElement({
    tag: 'label',
    classList: 'add-form__label',
    attributes: {
      for: `input-${fieldKey}`
    }
  });
}

function createInputEl(fieldKey, type, placeholder = '') {
  return createElement({
    tag: 'input',
    classList: 'add-form__input',
    attributes: {
      id: `input-${fieldKey}`,
      name: fieldKey,
      type,
      placeholder,
    },
  });
}

function createErrorSpanEl(fieldKey) {
  return createElement({
    tag: 'span',
    classList: 'add-form__error',
    attributes: {
      id: `error-${fieldKey}`,
    }
  });
}
