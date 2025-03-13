const CONFIGS = [
  { field: 'title', label: 'Название', type: 'text' },
  { field: 'shelf', label: 'Полка', type: 'text' },
  { field: 'weight', label: 'Вес', type: 'number' },
  { field: 'date', label: 'Время хранения', type: 'date' }
];

/** Возвращает массив объектов с конфигурациями для полей ввода формы */
export function getInputFieldsConfig() {
  return CONFIGS.map(config => {
    if (config.type === 'date') {// Удаляем label у объектов, где он не нужен
      const { label, ...configWithoutLabel } = config;
      return configWithoutLabel;
    }
    return config;
  });
}

/** Возвращает массив объектов с конфигурациями для th */
export function getThConfig() {
  return CONFIGS.map(config => {
    const { type, ...configWithoutType } = config; // Убираем type
    return { ...configWithoutType }; // Копируем остальные свойства
  }).concat({ field: 'action' }); // Добавляем { field: 'action' } в конец массива
}
