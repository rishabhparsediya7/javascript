function groupBy(array, keyGetter) {
  const res = array.reduce((result, item) => {
    const key = keyGetter(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {});
  return res;
}

const data = [
  { name: "Alice", group: "A" },
  { name: "Bob", group: "B" },
  { name: "Charlie", group: "A" },
  { name: "David", group: "C" },
];

const grouped = groupBy(data, (item) => item.group);
console.log(grouped);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const groupedByEvenOdd = groupBy(numbers, (num) =>
//   num % 2 === 0 ? "even" : "odd"
// );
// console.log(groupedByEvenOdd);
/*
Output:
{
  odd: [1, 3, 5, 7, 9],
  even: [2, 4, 6, 8]
}
*/
