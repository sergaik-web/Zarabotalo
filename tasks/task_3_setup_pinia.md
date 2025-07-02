# Задача 3: Установка и настройка Pinia

## Цель

Установить и настроить Pinia в проекте, а затем перенести состояние настроек со страницы `SettingsPage.vue` в Pinia store. Это улучшит управление состоянием и подготовит проект к более сложным функциям.

## Шаги

1.  **Установка Pinia:**
    *   Открой терминал и установи Pinia:
        ```bash
        npm install pinia
        # или
        yarn add pinia
        ```

2.  **Настройка Pinia в `main.ts`:**
    *   В `src/app/main.ts` импортируй `createPinia`.
    *   Создай экземпляр Pinia и используй его в приложении:
        ```typescript
        import { createPinia } from 'pinia'

        const pinia = createPinia()
        app.use(pinia)
        ```

3.  **Создание Pinia Store для настроек:**
    *   Создай новую папку `src/shared/stores` (если ее нет).
    *   Внутри `src/shared/stores` создай файл `settings.ts`.
    *   В `src/shared/stores/settings.ts` определи Pinia store для настроек. Он должен включать:
        *   Состояние (state) для всех настроек (громкость звука, громкость музыки, имя игрока, включение/отключение звука, гамма, яркость).
        *   Действия (actions) для сохранения и сброса настроек.
        *   Геттеры (getters) для получения значений настроек (опционально, но хорошая практика).

    *   Пример структуры `src/shared/stores/settings.ts`:
        ```typescript
        import { defineStore } from 'pinia'
        import { ref } from 'vue'

        export const useSettingsStore = defineStore('settings', () => {
          // Состояние
          const username = ref('User')
          const isSoundEnabled = ref(true)
          const volumeSound = ref(100)
          const volumeMusic = ref(100)
          const gamma = ref(100)
          const brightness = ref(100)

          // Действия
          function saveSettings() {
            // Логика сохранения настроек (например, в localStorage)
            console.log('Настройки сохранены в Pinia')
          }

          function resetSettings() {
            // Логика сброса настроек к дефолтным значениям
            username.value = 'User'
            isSoundEnabled.value = true
            volumeSound.value = 100
            volumeMusic.value = 100
            gamma.value = 100
            brightness.value = 100
            console.log('Настройки сброшены в Pinia')
          }

          // Геттеры (опционально)
          // const getUsername = computed(() => username.value)

          return {
            username,
            isSoundEnabled,
            volumeSound,
            volumeMusic,
            gamma,
            brightness,
            saveSettings,
            resetSettings,
          }
        })
        ```

4.  **Интеграция Pinia Store со страницей настроек (`SettingsPage.vue`):**
    *   В `src/pages/settings/ui/SettingsPage.vue` импортируй `useSettingsStore`.
    *   Используй `settingsStore = useSettingsStore()` для доступа к состоянию и действиям.
    *   Замени локальные `ref` переменные на состояние из Pinia store.
    *   Измени методы `saveSettings` и `cancelSettings` для использования действий из Pinia store.

## Подсказки

*   Pinia Devtools очень полезны для отладки состояния. Убедись, что они установлены в твоем браузере.
*   Помни о реактивности Pinia: используй `.value` для доступа к значениям `ref` внутри store.

Как только закончишь, дай мне знать!
