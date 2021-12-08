import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { createRouter, createWebHistory } from "vue-router";

import store from "./store";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(store)
  .mount("#app");
