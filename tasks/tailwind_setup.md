# Задание 1: Настройка TailwindCSS

**Цель:** Интегрировать и настроить TailwindCSS в вашем проекте Vue 3.

**Контекст:** TailwindCSS - это фреймворк CSS, который предоставляет низкоуровневые утилиты для быстрого создания пользовательских дизайнов. Он отличается от традиционных CSS-фреймворков тем, что не поставляется с предопределенными компонентами, а вместо этого предоставляет набор классов утилит, которые можно комбинировать для создания любого дизайна.

**Шаги:**

1.  **Установка TailwindCSS:**
    Откройте терминал в корне вашего проекта и выполните следующие команды:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```
    *   `npm install -D tailwindcss postcss autoprefixer`: Устанавливает TailwindCSS, PostCSS (необходим для обработки CSS) и Autoprefixer (добавляет префиксы поставщиков для кроссбраузерности).
    *   `npx tailwindcss init -p`: Создает файлы `tailwind.config.js` и `postcss.config.js`.

2.  **Настройка `tailwind.config.js`:**
    Откройте файл `tailwind.config.js` и настройте `content` для сканирования ваших файлов на наличие классов Tailwind. Это позволит TailwindCSS генерировать только те стили, которые вы используете.

    ```javascript
    // tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

3.  **Добавление директив Tailwind в ваш CSS:**
    Откройте файл `src/assets/main.css` (или любой другой основной CSS-файл, который вы используете) и добавьте директивы Tailwind в самом начале файла:

    ```css
    /* src/assets/main.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4.  **Проверка установки:**
    После выполнения этих шагов, вы можете попробовать использовать классы TailwindCSS в ваших Vue компонентах. Например, добавьте класс `text-red-500` к какому-либо элементу, чтобы проверить, работает ли он.

    Я уже внес небольшие изменения в `src/App.vue`, чтобы вы могли применить TailwindCSS. Найдите комментарии `<!-- TODO: Примените TailwindCSS здесь -->` и попробуйте добавить классы TailwindCSS к соответствующим элементам.

**Что нужно сделать:**

Выполните все вышеуказанные шаги. После того, как вы убедитесь, что TailwindCSS работает, сделайте коммит с сообщением "feat: Integrate TailwindCSS" и запушьте изменения в ветку `dev`.

**Вопросы для самопроверки (необязательно, но рекомендуется):**

*   Понимаете ли вы, почему мы используем `postcss` и `autoprefixer` вместе с TailwindCSS?
*   Какова роль `content` в `tailwind.config.js`?
*   Как TailwindCSS помогает уменьшить размер конечного CSS-файла?
