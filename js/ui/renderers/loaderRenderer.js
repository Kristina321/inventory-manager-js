import { createLoaderEl } from '../components/components.js';

/** Показывает лоадер в указанном контейнере и возвращает его элемент  */
export function renderLoader(container) {
  const loader = createLoaderEl();
  container.append(loader);

  return loader;
}

/** Удаляет лоадер из DOM */
export function removeLoader(loader) {
  if (loader && loader.parentNode) {
    loader.remove();
  }
}
