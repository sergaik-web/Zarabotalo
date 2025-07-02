import { defineStore } from "pinia";
import { ref } from "vue";

export const useSettingsStore = defineStore("settings", () => {
  const username = ref<string>("");
  const isSoundEnable = ref<boolean>(true);
  const volumeSound = ref<number>(100);
  const volumeMusic = ref<number>(100);
  const gamma = ref<number>(100);
  const brightness = ref<number>(100);

  const saveSettings = () => {
    console.log("Настройки сохранены");
  };

  const cancelSettings = () => {
    console.log("Изменения отменены");
  };

  return {
    username,
    isSoundEnable,
    volumeSound,
    volumeMusic,
    gamma,
    brightness,
    saveSettings,
    cancelSettings,
  };
});
