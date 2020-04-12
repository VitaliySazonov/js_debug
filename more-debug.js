// const people = [
//   {id: 1, name: 'Vito', age: 20},
//   {id: 2, name: 'qwe', age: 10},
//   {id: 3, name: 'sdadsa', age: 2},
//   {id: 4, name: 'safasfweq', age: 40},
// ];
// console.table(people);
console.time('timer');
const items = [];
for (let i = 0; i < 1_000_000; i++) {
  items.push({el: i + 1})
}
console.timeEnd('timer');