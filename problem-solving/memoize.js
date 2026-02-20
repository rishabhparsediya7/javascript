function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log("Fetching from cache");
      return cache.get(key);
    }
    console.log("Computing result");
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const slowFunction = (num) => {
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
};

const memoizedFunction = memoize(slowFunction);

let startTime = Date.now();
console.log(memoizedFunction(5));
console.log("time taken: ", Date.now() - startTime);

startTime = Date.now();
console.log(memoizedFunction(5));
console.log("time taken: ", Date.now() - startTime);

startTime = Date.now();
console.log(memoizedFunction(3));
console.log("time taken: ", Date.now() - startTime);
