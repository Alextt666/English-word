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
      function debounce([fn, preFn], delay = 500) {
        let timer = null;
        return function () {
          if (preFn) preFn();
          if (timer !== null) {
            clearTimeout(timer);
          }
          timer = setTimeout(fn, delay);
        };
      }
      el.addEventListener("click", debounce(value, 500));
    },
    beforeUnmount(el, binding) {
      el.removeEventListener("click", debounce(value, 500));
    },
  });
}
