import { createApp } from "vue";
import App from "./App.vue";
import AuthIf from "../lib/index";
import { useStore } from "./store";

const app = createApp(App);
// 注册插件
app.use(AuthIf, {
  name: "auth-if",
  provide: (arg: string) => {
    const store = useStore();
    if (arg === "rs") {
      return store.roles;
    } else if (arg === "ps") {
      return store.permissions;
    } else {
      return [...store.roles, ...store.permissions];
    }
  },
  skips: [],
});
app.mount("#app");
