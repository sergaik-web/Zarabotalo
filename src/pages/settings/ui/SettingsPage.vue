<script setup lang="ts">
import { NSlider, NInput, NSwitch, NButton, NSpace, NCard } from "naive-ui";
import type { InputInst } from "naive-ui";
import { ref } from "vue";
import { useSettingsStore } from "@/shared/stores/settings";
import { storeToRefs } from "pinia";

const settingsStore = useSettingsStore();
const { username, isSoundEnable, volumeSound, volumeMusic, gamma, brightness } =
  storeToRefs(settingsStore);
const { saveSettings, cancelSettings } = settingsStore;

const usernameInputRef = ref<InputInst | null>(null);
function focusUserInput() {
  usernameInputRef.value?.focus();
}
</script>

<template>
  <div class="p-4 flex justify-center">
    <n-card title="Настройки игры" class="max-w-md mx-auto shadow-lg rounded-lg" id="setting-card">
      <n-space vertical :size="20">
        <div>
          <label v-on:click="focusUserInput" class="block text-lg font-medium label green"
            >Имя игрока</label
          >
          <n-input ref="usernameInputRef" v-model:value="username" placeholder="Введите имя" />
        </div>

        <div class="flex item-center justify-between">
          <label
            v-on:click="isSoundEnable = !isSoundEnable"
            class="block text-lg font-medium label green"
            >Звук</label
          >
          <n-switch v-model:value="isSoundEnable" />
        </div>

        <div>
          <label class="block text-lg font-medium green">Громкость звука</label>
          <n-slider v-model:value="volumeSound" :step="1" :max="100" :min="0" />
        </div>

        <div>
          <label class="block text-lg font-medium green">Громкость звука</label>
          <n-slider v-model:value="volumeMusic" :step="1" :max="100" :min="0" />
        </div>

        <div>
          <label class="block text-lg font-medium green">Гамма</label>
          <n-slider v-model:value="gamma" :step="1" :max="100" :min="0" />
        </div>

        <div>
          <label class="block text-lg font-medium green">Яркость</label>
          <n-slider v-model:value="brightness" :step="1" :max="100" :min="0" />
        </div>

        <n-space justify="end">
          <n-button type="primary" @click="saveSettings">Сохранить</n-button>
          <n-button @click="cancelSettings" class="cancel-button-style">Отмена</n-button>
        </n-space>
      </n-space>
    </n-card>
  </div>
</template>

<style scoped>
.label {
  cursor: pointer;
}

#setting-card > :first-child > :first-child {
  font-size: 30px !important;
}

.cancel-button-style {
  background-color: transparent !important;
  color: hsla(160, 100%, 37%, 1) !important;
  border: 1px solid hsla(160, 100%, 37%, 1) !important;
}

.cancel-button-style:hover {
  background-color: #536788;
  color: rgb(109, 207, 175) !important;
}
</style>
