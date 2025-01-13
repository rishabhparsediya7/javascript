Array.prototype.mymap = function (callback, thisArg) {
  var Obj = Object(this);
  var len = Obj.length >>> 0;

  var result = new Array(len);

  for (var i = 0; i < len; i++) {
    if (i in Obj) {
      result[i] = callback.call(thisArg, Obj[i]);
    }
  }

  return result;
};

const numbers = [1, 2, 3];
const doubled = numbers.mymap(function (num) {
  return num * 2;
});

console.log(doubled);
