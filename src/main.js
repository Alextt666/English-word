import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { registDirectives } from "./directives";
const app = createApp(App);
registDirectives(app);

app.use(router);
app.mount("#app");
