import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);

// 自定义focus指令
// 自动聚焦
app.directive("focus", {
  mounted: (el) => el.focus(),
});

// 自定义debouce 指令
// fn 待执行函数, preFn 正常执行的函数
app.directive("debounce", {
  mounted(el, { value }) {
    function debounce([fn, preFn], delay = 200) {
      let timer = null;
      return function () {
        preFn();
        if (timer !== null) {
          clearTimeout(timer);
        }
        timer = setTimeout(fn, delay);
      };
    }
    el.addEventListener("click", debounce(value, 200));
  },
});

app.use(router);
app.mount("#app");
