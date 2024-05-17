//데이터 타입 : 기본[string, number, boolean, null, undefined] & 참조 [Array]
// Array
// const colors = ["#27ae60", "#ecf0f1", "#f1c40f", "#e74c3c"];
// colors.push("#2c3e50"); //push 배열에 추가해주세요
// colors.sort(); //sort 배열을 정렬해주세요

// colors.forEach((x) => {
// divbox h:100 w:100 bg:x 화면에 나타내기 코드
// }); //한명씩 불러주셈

// const colors = ["#27ae60", "#ecf0f1", "#f1c40f", "#e74c3c"];
// colors.push("#2c3e50"); //push 배열에 추가해주세요
// colors.sort(); //sort 배열을 정렬해주세요

// colors.forEach((x) => {
//   const box = document.createElement("div");
//   box.style.width = "100px";
//   box.style.height = "100px";
//   box.style.backgroundColor = x;
//   document.body.appendChild(box);
// });

// const colors = ["#27ae60", "#ecf0f1", "#f1c40f", "#e74c3c"];
// colors.push("#2c3e50"); //push 배열에 추가해주세요
// colors.sort(); //sort 배열을 정렬해주세요

// const menu = ["americano", "latte", "mint", "vanlina", "milktea"];
// menu.forEach((x) => {
//   console.log(x.toUpperCase());
// });

// const prices = [2000, 3000, 5000, 3000, 4000, 6000];
// prices.forEach((x) => {
//   if (x > 3000){
//      console.log("비쌈")
//   } else {

//   }

// });
// document.body.appendChild(prices);

// replace(a,b) [a를 b로]
// replaceAll(a,b) [모든 a를 b로]
// slice(a,b) [a,b-1]까지 문자 짜르기
// const a = "hello".replace("o", "z");
// console.log(a);
// split("target") target 기준으로 배열로 분리하기

// wh:100 bg:blue wh: 200 bg:green
// const option = ["100 blue", "200 green", "500 black", "400 red"];

const option = ["100 blue", "200 green", "500 black", "400 red"];
option.forEach((x) => {
  const a = x.split(" ");
  const length = a[0];
  const color = a[1];

  const box = document.createElement("div");
  box.style.height = `${length}px`;
  box.style.width = `${length}px`;
  box.style.backgroundColor = color;
  document.body.append(box);
});
