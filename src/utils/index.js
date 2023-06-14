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

export { debounce }