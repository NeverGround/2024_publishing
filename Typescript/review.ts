// const solution = (arr: number[]) => {
//   if (arr.length == 1) {
//     return [-1];
//   }
//   const min = arr.sort()[0];
//   const newArr = arr.filter((v) => (v! = min));
//   return newArr;
// };

const solution = (arr: number[]) =>
  arr.length == 0 ? [-1] : arr.filter((v) => v != arr.sort()[0]);
