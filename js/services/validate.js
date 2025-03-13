import { handlerSubmit } from '../handlers/handlers.js';

export function validateForm() {
  const validator = new JustValidate(document.querySelector('#add-form'), {
    validateBeforeSubmitting: true,
  });
  validator
    .addField(document.querySelector('#input-title'), [
      {
        rule: 'required',
        errorMessage: 'Введите название продукта',
      },
    ], {
      errorsContainer: '#error-title',
    })
    .addField(document.querySelector('#input-shelf'), [
      {
        rule: 'required',
        errorMessage: 'Введите номер полки',
      },
    ], {
      errorsContainer: '#error-shelf',
    })
    .addField(document.querySelector('#input-weight'), [
      {
        rule: 'required',
        errorMessage: 'Введите вес продукта',
      },
      {
        rule: 'number',
        errorMessage: 'Только числовое значение',
      },
      {
        validator: (value) => value > 0 ? true : false,
        errorMessage: 'Вес не может быть меньше 0',
      }
    ], {
      errorsContainer: '#error-weight',
    })
    .addField(document.querySelector('#input-date'), [
      {
        rule: 'required',
        errorMessage: 'Введите период хранения',
      },
    ], {
      errorsContainer: '#error-date',
    })

  validator.onSuccess((event) => {
    handlerSubmit(event);
  });
}
