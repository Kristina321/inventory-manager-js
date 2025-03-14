# Веб-приложение для управления складом 📦
Небольшое веб-приложение, написанное на JavaScript, которое помогает управлять списком вещей на складе. Приложение состоит из двух динамических страниц: «Склад» и «Добавить запись». Переходы между ними сопровождаются прелоадером, который показывает статус загрузки.

## Функциональность
### Страница «Склад»
1. **Заголовок:** Название страницы.
2. **Кнопка «Добавить запись»:** Переход на страницу добавления новой записи.
3. **Таблица с вещами:**
-Показ всех записей из localStorage.
-Поддерживается сортировка записей по возрастанию и убыванию нажатием на заголовок столбца.
-Каждая запись имеет кнопку удаления, которая удаляет её из списка и обновляет localStorage.
### Страница «Добавить запись»
1. **Заголовок:** Название страницы.
2. **Форма добавления записи:**
Поля для ввода:
- *«Название» (обязательно)*
- *«Полка» (обязательно)*
- *«Вес» (только цифры, обязательно)*
- *«Время хранения» (дата, обязательно)*
Кнопка «Добавить»: Добавляет новую запись в localStorage после успешного заполнения формы и возвращает на страницу «Склад».
Валидация полей: Сообщение об ошибке выводится, если введённые данные неверны.
### Прелоадер
При переключении между страницами отображается прелоадер, сигнализируя о процессе загрузки.

## Структура проекта
```
project/
│
├── index.html
├── js/
│   ├── index.js
│   ├── handlers/
│   ├── services/
│   ├── ui/
│   │   ├── components/
│   │   └── renderers/
│   └── utils/
└── style/
```

## Как запустить проект

`git clone https://github.com/Kristina321/inventory-manager-js.git`
Затем откройте файл index.html в вашем браузере.

## Используемые технологии
JavaScript: Основной язык разработки.
HTML/CSS: Для разметки и оформления.
localStorage: Хранение данных на клиентской стороне.
Модульная структура: Проект разбит на модули для удобства поддержки и масштабируемости.
## Пример использования
### Добавление записи
Перейдите на страницу «Добавить запись».
Заполните поля формы:
Название: «Книга»
Полка: «A1»
Вес: «2»
Время хранения: «30.05.2025»
Нажмите «Добавить», запись добавится в localStorage, и вы будете перенаправлены обратно на страницу «Склад».
### Удаление записи
На странице «Склад» выберите запись, которую нужно удалить.
Нажмите кнопку «Удалить», запись будет удалена из таблицы и localStorage.
### Сортировка записей
На странице «Склад» кликните на заголовок нужного столбца (например, «Название») для сортировки по возрастанию.
Повторный клик сортирует по убыванию.
## Возможные улучшения
- Реализовать функцию редактирования записей.
- Добавить механизм поиска по таблице.
- Поддерживать несколько складов.
- Улучшить дизайн и удобство использования (UX).
