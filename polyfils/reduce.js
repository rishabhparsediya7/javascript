Array.prototype.myreduce = function (callback, initialValue) {
  var Obj = Object(this);
  var len = Obj.length >>> 0;

  var k = 0;
  var accumulator;

  if (arguments.length > 1) {
    accumulator = initialValue;
  } else {
    accumulator = Obj[k++];
  }

  while (k < len) {
    if (k in Obj) {
      accumulator = callback(accumulator, Obj[k]);
    }
    k++;
  }

  return accumulator;
};
const numbers = [1, 2, 3, 4];

const sum = numbers.myreduce(function (acc, curr) {
  return acc + curr;
}, 0);

console.log(sum);

const product = numbers.myreduce(function (acc, curr) {
  return acc * curr;
});

console.log(product); // 24
