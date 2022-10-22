# toc_test

## Тест план

### Задача
- Функциональное тестирование ТоС.
- Автоматизация функционального тестирования.
### За пределами задачи
- Нефункциональные типы тестирования (производительности, безопасности, юзабилити и другие).
- Функциональное тестирование других частей страницы, в том числе навигации по странице.
### Предположения
- Внешний вид меню соответствует спецификации.
- Имеется два режима отображения, для более широкого окна (desktop) и для более узкого окна (mobile).
### Окружение
- Ручное тестирование выполняется в браузерах Chrome, Firefox, Safari в среде MacOS.
- Автоматизированное регрессионное тестирование функциональности выполняется в браузере Chrome в среде Linux.
### Риски
- Неправильная оценка трудозатрат.
- Неполное покрытие функциональности при отсутствии спецификации.
- Предположения не верны.
### Функциональность
1. Меню отображается по умолчанию в режиме desktop и не отображается в режиме mobile.

1.1 | Меню отображается по умолчанию в режиме desktop
--- | ---
Prerequisites | Окно браузера имеет ширину соответствующую режиму desktop
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Открыть страницу по ссылке
Expected | Меню ToC отображается в левой части страницы

1.2 | Меню не отображается по умолчанию в режиме mobile
--- | ---
Prerequisites | Окно браузера имеет ширину соответствующую режиму mobile
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Открыть страницу по ссылке
Expected | Меню ToC не отображается в левой части страницы

2. В режиме mobile меню можно отобразить и скрыть.

2.1 | Меню можно отобразить в режиме mobile
--- | ---
Prerequisites | Окно браузера имеет ширину соответствующую режиму mobile
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Открыть страницу по ссылке<br/>2. Кликнуть иконку-гамбургер
Expected | Меню ToC отображается в левой части страницы

2.2 | Меню можно скрыть в режиме mobile
--- | ---
Prerequisites | Тест 2.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть иконку закрытия меню.
Expected | Меню ToC не отображается в левой части страницы.

3. Пункт меню можно свернуть и развернуть в любом режиме меню.

3.1 | Пункт меню можно свернуть в режиме desktop
--- | ---
Prerequisites | Окно браузера имеет ширину соответствующую режиму desktop
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Открыть страницу по ссылке<br/>2. Кликнуть пункт меню Getting started
Expected | Подпункты меню Getting started не отображаются

3.2 | Пункт меню можно развернуть в режиме desktop
--- | ---
Prerequisites | Тест 3.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть пункт меню Getting started
Expected | Подпункты меню Getting started отображаются

3.2 | Пункт меню можно свернуть в режиме mobile
--- | ---
Prerequisites | Тест 2.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть пункт меню Getting started
Expected | Подпункты меню Getting started не отображаются

3.3 | Пункт меню можно развернуть в режиме mobile
--- | ---
Prerequisites | Тест 3.2
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть пункт меню Getting started
Expected | Подпункты меню Getting started отображаются

4. Подпункты меню отображаются корректно при разворачивании.

4.1 | Подпункты меню отображаются корректно при разворачивании в режиме desktop
--- | ---
Prerequisites | Окно браузера имеет ширину соответствующую режиму desktop
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Развернуть все свернутые пункты меню
Expected | Все подпункты ToC отображаются корректно

4.2 | Подпункты меню отображаются корректно при разворачивании в режиме mobile
--- | ---
Prerequisites | Тест 2.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Развернуть все свернутые пункты меню
Expected | Все подпункты ToC отображаются корректно

5. При выборе любого пункта меню отображается соответствующая статья.

5.1 | При выборе любого пункта меню отображается соответствующая статья
--- | ---
Prerequisites | Тест 4.1
Data | 1. https://www.jetbrains.com/help/idea/getting-started.html<br/>2. Список статей
Steps | 1. Кликнуть каждый пункт меню ToC
Expected | Отображается соответствующая статья

6. Меню может скрываться при выборе пункта в режиме mobile.

6.1 | Меню скрывается в режиме mobile при выборе пункта, для которого есть статья
--- | ---
Prerequisites | Тест 2.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть пункт меню Accessibility
Expected | Меню ToC не отображается в левой части страницы.

6.1 | Меню продолжает отображаться в режиме mobile при выборе пункта, для которого нет статьи
--- | ---
Prerequisites | Тест 2.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть пункт меню Reference
Expected | Меню ToC отображается в левой части страницы.

7. Меню продолжает отображаться при выборе любого пункта в режиме desktop.

7.1 | Меню продолжает отображаться при выборе пункта в режиме desktop
--- | ---
Prerequisites | Тест 1.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть пункт меню Accessibility
Expected | Меню ToC отображается в левой части страницы.

8. При выборе пункта меню для которого нет статьи продолжает отображаться предыдущая статья.

8.1 | При выборе пункта меню Reference продолжает отображаться предыдущая статья
--- | ---
Prerequisites | Тест 1.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть пункт меню Reference
Expected | Отображается статья Getting started

9. Тексты разной длины полностью видимы и отображаются корректно.

9.1 | Пункт меню с текстом длиной > 100 символов отображается корректно
--- | ---
Prerequisites | Тест 1.1
Data | Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Steps | 1. Отредактировать значение пункта меню с помощью DevTools
Expected | Пункт меню отображается корректно

9.2 | Пункт меню с текстом длиной 1 символ 
--- | ---
Prerequisites | Тест 1.1
Data | а
Steps | 1. Отредактировать значение пункта меню с помощью DevTools
Expected | Пункт меню отображается корректно

10. Тексты с разными типами символов отображаются корректно.

10.2 | Пункт меню с текстом, который содержит разные типы символов 
--- | ---
Prerequisites | Тест 1.1
Data | \] \* ? / \\ \| \< \> \, . ( ) [ ] { } ; : ‘ “ ! @ # $ % ^ & 1 2 &lt;
Steps | 1. Отредактировать значение пункта меню с помощью DevTools
Expected | Пункт меню отображается корректно

11. Вертикальный скроллинг меню работает корректно в любом режиме меню

9.2 | Вертикальный скроллинг работает корректно в режиме desktop
--- | ---
Prerequisites | Тест 1.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть последний пункт меню (Reference)<br/>2. Выполнить скролл до конца меню
Expected | Все подпункты меню Reference отображаются корректно

9.2 | Вертикальный скроллинг работает корректно в режиме mobile
--- | ---
Prerequisites | Тест 2.1
Data | https://www.jetbrains.com/help/idea/getting-started.html
Steps | 1. Кликнуть последний пункт меню (Reference)<br/>2. Выполнить скролл до конца меню
Expected | Все подпункты меню Reference отображаются корректно

12. Существует статья, которая отображается по умолчанию.

12.1 | Статья Getting started отображается по умолчанию
--- | ---
Prerequisites | Окно браузера имеет ширину соответствующую режиму desktop
Data | https://www.jetbrains.com/help/idea/
Steps | 1. Открыть страницу по ссылке
Expected | Отображается статья Getting started

13. Существует страница заглушка для ошибки 404.

13.1 | Для несуществующей страницы отображается страница заглушка
--- | ---
Prerequisites | Окно браузера имеет ширину соответствующую режиму desktop
Data | https://www.jetbrains.com/help/idea/getting-started1.html
Steps | 1. Открыть страницу по ссылке
Expected | Отображается страница-заглушка 404

### Автоматизированные тесты функциональности
Могут быть разбиты на три категории:
- actions: поведение меню
- appearance: отображение меню в разных режимах
- data: соответствие содержимого меню заданному

## Запуск тестов

Чтобы запустить тесты, Docker и Docker Compose должны быть установлены и docker daemon запущен:
```
// собрать образ, запустить контейнер и тесты
docker-compose up --build
// удалить контейнер, образ, тома и сеть сервиса
docker-compose down --remove-orphans -v --rmi local
```

Кроме этого можно установить в системе Node v16 и выполнить локально:

```
npm ci
npm test
```