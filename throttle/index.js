const myThrottle = (cb, d) => {
  let lastTime = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - lastTime < d) return;
    console.log("now - lastTime", now - lastTime);
    lastTime = now;
    return cb(...args);
  };
};

const throttleCount = myThrottle(() => {
  console.log("Throttling....");
}, 1000);

throttleCount();
throttleCount();
throttleCount();
throttleCount();
