function MyPromise(executor) {
  let onResolve;
  let onReject;
  let isFulfilled = false;
  let isRejected = false;
  let isCalled = false;
  let value;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    if (typeof onResolve === "function") {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(val) {
    isRejected = true;
    value = val;
    if (typeof onReject === "function") {
      onReject(val);
      isCalled = true;
    }
  }
  this.then = function (callback) {
    onResolve = callback;
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value);
    }
    return this;
  };
  this.catch = function (callback) {
    onReject = callback;
    if (isRejected && !isCalled) {
      isCalled = true;
      onReject(value);
    }
    return this;
  };
  try {
    executor(resolve, reject);
  } catch (err) {
    reject(err);
  }
}

// const executor = (resolve, reject) => {
//   setTimeout(() => {
//     const success = Number(Math.floor(Math.random() * 100)) < Number(50);
//     if (success) {
//       resolve("Promise Fulfilled!");
//     } else {
//       reject("Promise Rejected!");
//     }
//   }, 1000);
// };

const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    const success = Number(Math.floor(Math.random() * 100)) < Number(50);
    if (success) {
      resolve("Promise Fulfilled!");
    } else {
      reject("Promise Rejected!");
    }
  }, 1000);
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
