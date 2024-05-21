// 데이터 타입: 기본 + 참조
// 기본 : number, string, null, undefined, boolean
// 참조 : array

//String() or "" or `` or +
//number = Number() or 123123 or +
//boolean = Boolean() or true or !
//Array = Array() or []

// const fruits = ["apple", "banana", "orange", "kiwi"];

// // 인덱스
// fruits[0]; // apple
// fruits[1]; // banana

// // 추가 및 갱신
// fruits.push("grape");
// fruits[0] = "mango";

// // 삭제
// fruits.pop(); // 맨 뒤에 삭제
// delete fruits[1]; // banana 삭제

// 가공하는 기능
// 1. 변형 - push, pop, reverse, shift[맨앞에 짜르기], sort
// 2. 접근자 - indexof[몇번째?], slice[짜르고 새로운 배열로 주기]
// 3. 반복[(v)=>{v}] - forEach, map

// const num = [3, 7, 2, 91, 309, 23, 124];
// const fruits = ["apple", "banana", "orange", "kiwi"];

// const fruArr = fruits.map((v) => {
//   return v.includes("a") ? v.toUpperCase() : "icecream";
// });

// 요소 바꾸기
// const newArr = num.map((v) => {
//   return v + 10;
// });
// console.log(newArr);

// const newArr1 = num.map((v) => {
//   return v + 100;
// });
// console.log(newArr1);

// const newArr2 = num.map((v) => {
//   return v * v;
// });
// console.log(newArr2);

// const newArr3 = num.map((v) => {
//   return v % 2 == 1 ? v ** 2 : v + 100;
// });

//filter
// const num1 = [3, 7, 2, 91, 309, 23, 124];
// const fruits1 = [
//   "apple",
//   "banana",
//   "orange",
//   "kiwi",
//   "mango",
//   "durian",
//   "strawberry",
//   "melon",
//   " watermelon",
// ];

// const num1Arr = num1.filter((v) => {
//   return v > 10;
// });
// console.log(num1Arr);

// const num1Arr = num1.filter((v) => {
//   return v % 2 == 0;
// });

// const fruits1Arr = fruits1.filter((v) => {
//   return v.length == 6;
// });

// 알파벳 i가 들어가 있으면 제거하고, 제거 후 단어의 문자의 길이로 치환

// const fru2Arr = fruits1.filter((v) => {
//   return !v.includes("i");
// });.map((v) => {
//     return v.length;

// });

//every && some
// const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const every1 = arr3.every((v) => {
//   return v > 0;
// });
// const some1 = arr3.some((v) => {
//   return v >= 10;
// });
// // console.log(`every1:${every1}`);
// console.log(`some1:${some1}`);

// const num4 = [3, 7, 2, 91, 309, 23, 124];
// const num4Arr = num4.map((v) => {
//   return v + 351;
// });
// console.log(`num4Arr:${num4Arr}`);
// const num5 = [3, 7, 2, 91, 309, 23, 124];
// const num5Arr = num4.map((v) => {
//   return v * 8;
// });
// console.log(`num5Arr:${num5Arr}`);
// const num6 = [3, 7, 2, 91, 309, 23, 124];
// const num6Arr = num4.map((v) => {
//   return v / 1.4;
// });
// console.log(`num6Arr:${num6Arr}`);

// const num7 = [3, 7, 2, 91, 309, 23, 124];
// const num7Arr = num4.map((v) => {
//   return v - 35;
// });
// console.log(`num7Arr:${num7Arr}`);
