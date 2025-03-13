import { createTitleEl, createSubmitButtonEl } from '../components/components.js';
import { createFormEl, createInputFieldEl } from '../components/componenetsForm.js'
import { getInputFieldsConfig } from '../../services/fieldConfig.js';
import { validateForm } from '../../services/validate.js';

/**
 * Рендерит форму для добавления новой записи в указанный контейнер.
 * После рендеринга формы запускается валидация.
 * @param {HTMLElement} container - Контейнер, в который будет добавлена форма.
 * */
export function renderForm(container) {
  const titleEl = createTitleEl('Добавить запись');
  const formEl = createFormEl();
  const btnEl = createSubmitButtonEl();
  const fieldsConfig = getInputFieldsConfig();

  fieldsConfig.forEach(({ field, label, type }) => {
    const inputFieldEl = createInputFieldEl(field, type, label);
    formEl.append(inputFieldEl);
  });

  formEl.append(btnEl);

  container.append(titleEl, formEl);

  validateForm();
}
