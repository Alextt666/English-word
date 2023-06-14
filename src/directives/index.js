import { debounce } from "../utils";


export function registDirectives(app) {
  // 自定义focus指令
  // 自动聚焦
  app.directive("focus", {
    mounted: (el) => el.focus(),
    updated: (el) => el.focus(),
  });

  // 自定义debouce 指令
  // fn 待执行函数, preFn 正常执行的函数
  app.directive("debounce", {
    mounted(el, { value }) {
      el.addEventListener("click", debounce(value, 500));
    },
    beforeUnmount(el, {value}) {
      el.removeEventListener("click", debounce(value, 500));
    },
  });
}
