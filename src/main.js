import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
import storeConfigs from "./store";

const store = createStore(storeConfigs);

createApp(App).use(router).use(store).mount("#app");
