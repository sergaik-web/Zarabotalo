# Задача 1: Настройка проекта

Привет! Начнем с базовой настройки проекта, чтобы убедиться, что все необходимые технологии готовы к работе.

## Цель

Убедиться, что проект корректно настроен для использования:
1.  **Vue 3**
2.  **TypeScript**
3.  **NaiveUI**
4.  **TailwindCSS**

## Шаги

1.  **Проверь установку зависимостей:**
    *   Убедись, что Vue 3 и TypeScript уже установлены и настроены в проекте. Проверь `package.json` и `tsconfig.json`.
    *   Установи NaiveUI. Тебе нужно будет добавить его в `package.json` и настроить его использование в `main.ts` или другом подходящем месте.
    *   Установи TailwindCSS. Проверь `package.json`, `tailwind.config.js` и `postcss.config.js`. Убедись, что TailwindCSS правильно интегрирован в сборку.

2.  **Создай простой компонент с использованием NaiveUI и TailwindCSS:**
    *   В `src/app/App.vue` или в новом компоненте (например, `src/components/HelloWorldNaive.vue`) добавь простой элемент NaiveUI (например, `<n-button>`).
    *   Примени к этому элементу или к его родительскому контейнеру несколько классов TailwindCSS (например, `bg-blue-500 text-white p-4 rounded`).

3.  **Проверь работу:**
    *   Запусти проект и убедись, что компонент отображается корректно, стили NaiveUI применяются, и классы TailwindCSS работают.

## Подсказки

*   Для установки NaiveUI и TailwindCSS используй `npm install` или `yarn add`.
*   Документация NaiveUI: [https://www.naiveui.com/](https://www.naiveui.com/)
*   Документация TailwindCSS: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

Удачи! Как только закончишь, дай мне знать.
