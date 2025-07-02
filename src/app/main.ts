import "../shared/styles/main.css";

import { createApp } from "vue";
import App from "@/app/App.vue";
import { create } from "naive-ui";
import router from "../router";
import { themeOverrides } from "../shared/config/naive-ui-theme-overrides";
import { createPinia } from "pinia";

const app = createApp(App);
const naive = create();
const pinia = createPinia();

app.use(naive);
app.use(router);
app.use(pinia);
app.provide("themeOverrides", themeOverrides);
app.mount("#app");
