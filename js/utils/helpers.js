let appContainer = null;

/**
 * Возвращает контейнер приложения, если он уже был найден.
 * Если контейнер не был найден ранее, выполняет поиск элемента с id "app" и сохраняет его
*/
export function getAppContainer() {
  if (!appContainer) {
    appContainer = document.querySelector('#app');
  }
  return appContainer;
}

/**Очищает 'app'-контейнер и возвращает его */
export function resetAppContainer() {
  const app = getAppContainer();
  if (app) {
    app.innerHTML = '';
  }
  return app;
}
