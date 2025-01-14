var addTwoPromises = async function (promise1, promise2) {
  const results = await Promise.all([promise1, promise2]);
  return results.reduce((res, n) => n + res, 0);
};

var promise1 = new Promise((resolve) =>
  setTimeout(() => {
    resolve(3);
  }, 20)
);

var promise2 = new Promise((resolve) =>
  setTimeout(() => {
    resolve(7);
  }, 70)
);

const sum = async () => {
  console.log(await addTwoPromises(promise1, promise2));
};

sum();
