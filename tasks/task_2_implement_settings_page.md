# Задача 2: Реализация страницы настроек

## Цель

Реализовать страницу настроек (`src/pages/settings/ui/SettingsPage.vue`) с использованием компонентов NaiveUI и стилизацией с помощью TailwindCSS, придерживаясь принципов Feature-Sliced Design (FSD).

## Функционал

Страница настроек должна включать следующие элементы:

1.  **Громкость звука:** Ползунок (`n-slider`).
2.  **Громкость музыки:** Ползунок (`n-slider`).
3.  **Имя игрока:** Поле ввода (`n-input`) с дефолтным значением "User".
4.  **Включение/отключение звука:** Переключатель (`n-switch`).
5.  **Настройка гаммы:** Ползунок (`n-slider`).
6.  **Настройка яркости:** Ползунок (`n-slider`).
7.  **Кнопки:** "Сохранить" и "Отмена" (`n-button`).

## Шаги реализации

1.  **Установи NaiveUI:** Если еще не установлено, добавь NaiveUI в проект. Инструкции можно найти на официальном сайте NaiveUI.

2.  **Настрой TailwindCSS:** Убедись, что TailwindCSS правильно настроен и интегрирован в проект. Проверь `tailwind.config.js` и `postcss.config.js`.

3.  **Модифицируй `src/pages/settings/ui/SettingsPage.vue`:**
    *   Используй компоненты NaiveUI для каждого элемента управления.
    *   Примени TailwindCSS классы для стилизации и позиционирования элементов. Подумай о компоновке (например, использование Flexbox или Grid).
    *   Добавь `v-model` для связывания значений элементов управления с данными.

4.  **Организация данных и логики (FSD):**
    *   Создай файл `src/pages/settings/model/settings.ts` (или аналогичный) для хранения состояния настроек (например, с использованием `ref` или `reactive` из Vue). Это будет твой "model" слой.
    *   Определи интерфейс или тип для объекта настроек.
    *   Реализуй функции для сохранения и отмены изменений настроек. Эти функции также должны быть в слое `model`.
    *   Импортируй и используй эти данные и функции в `SettingsPage.vue`.

5.  **Обработка событий:**
    *   Реализуй методы для кнопок "Сохранить" и "Отмена". Кнопка "Сохранить" должна обновлять состояние настроек, а "Отмена" - возвращать их к исходным значениям.

## Пример структуры `SettingsPage.vue`

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { NSlider, NInput, NSwitch, NButton, NSpace, NCard } from 'naive-ui';

// TODO: Импортируй данные и функции из src/pages/settings/model/settings.ts

// TODO: Определи реактивные переменные для хранения значений настроек
// Например:
// const volumeSound = ref(50);
// const volumeMusic = ref(50);
// const playerName = ref('User');
// const isSoundEnabled = ref(true);
// const gamma = ref(50);
// const brightness = ref(50);

// TODO: Реализуй функции для сохранения и отмены
const saveSettings = () => {
  // Логика сохранения настроек
  console.log('Настройки сохранены');
};

const cancelSettings = () => {
  // Логика отмены изменений
  console.log('Изменения отменены');
};
</script>

<template>
  <div class="p-4">
    <n-card title="Настройки игры" class="max-w-md mx-auto shadow-lg rounded-lg">
      <n-space vertical :size="20">
        <!-- TODO: Реализуй ползунок громкости звука -->
        <div>
          <label for="volume-sound" class="block text-lg font-medium text-gray-700">Громкость звука</label>
          <n-slider id="volume-sound" :step="1" :max="100" :min="0" />
        </div>

        <!-- TODO: Реализуй ползунок громкости музыки -->
        <div>
          <label for="volume-music" class="block text-lg font-medium text-gray-700">Громкость музыки</label>
          <n-slider id="volume-music" :step="1" :max="100" :min="0" />
        </div>

        <!-- TODO: Реализуй поле ввода имени игрока -->
        <div>
          <label for="player-name" class="block text-lg font-medium text-gray-700">Имя игрока</label>
          <n-input id="player-name" placeholder="Введите имя" />
        </div>

        <!-- TODO: Реализуй переключатель включения/отключения звука -->
        <div class="flex items-center justify-between">
          <label for="sound-toggle" class="text-lg font-medium text-gray-700">Включить звук</label>
          <n-switch id="sound-toggle" />
        </div>

        <!-- TODO: Реализуй ползунок гаммы -->
        <div>
          <label for="gamma" class="block text-lg font-medium text-gray-700">Гамма</label>
          <n-slider id="gamma" :step="1" :max="100" :min="0" />
        </div>

        <!-- TODO: Реализуй ползунок яркости -->
        <div>
          <label for="brightness" class="block text-lg font-medium text-gray-700">Яркость</label>
          <n-slider id="brightness" :step="1" :max="100" :min="0" />
        </div>

        <!-- TODO: Реализуй кнопки сохранения и отмены -->
        <n-space justify="end">
          <n-button type="primary" @click="saveSettings">Сохранить</n-button>
          <n-button @click="cancelSettings">Отмена</n-button>
        </n-space>
      </n-space>
    </n-card>
  </div>
</template>

<style scoped>
/* Добавь свои стили TailwindCSS здесь, если необходимо */
</style>
```

## Подсказки

*   Используй `v-model` для двустороннего связывания данных с компонентами NaiveUI.
*   Для стилизации используй только классы TailwindCSS. Избегай написания кастомных CSS в `<style scoped>`.
*   Помни о принципах FSD: разделяй логику (model) и представление (ui).

Как только закончишь, дай мне знать! Удачи!
