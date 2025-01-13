const myDebounce = (cb, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, d);
  };
};

const incrementCount = myDebounce(() => {
  console.log("incremented");
}, 1000);

incrementCount();
