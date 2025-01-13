Array.prototype.myfilter = function (callback, thisArg) {
  var Obj = Object(this);
  var len = Obj.length >>> 0;

  var k = 0;

  var result = [];

  while (k < len) {
    if (k in Obj) {
      if (callback.call(thisArg, Obj[k])) {
        result.push(Obj[k]);
      }
    }
    k++;
  }

  return result;
};
const numbers = [1, 2, 3, 4];

const product = numbers.myfilter((num) => num > 2);

console.log(product); // 24
