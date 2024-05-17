// if 조건문
// (조건식)

// const age = Number(window.prompt("몇살이셈"));

// if (age > 19) {
//   console.log("성인이네요");
// } else {
//   console.log("미성년자이네요");
// }

// console.log("프로그램 끝");

//prompt로 두 개의 숫자를 입력 받고
//큰 수를 콘솔로 출력하기

// const a = Number(window.prompt("숫자 입력:"));
// const b = Number(window.prompt("숫자 입력:"));

// if (a >= b) {
//   console.log(`${a}가 큽니다.`);
// } else {
//   console.log(`${b}가 큽니다.`);
// }

// const age = 15;

// if(age > 19){
//   console.log("성인")
// }else if(19>= && age > 16){
//   console.log("고딩")
// } else if (age >= 16 && age > 13){
//   console.log("중딩")
// }else{
//   console.log("초딩")
// }

// 1.하나의 정수를 입력 받고, 양수, 음수, 0인지 확인하기
// 2.수학 점수를 입력 받고, 90 이상 'A', 80이상 'B', =70 'C', 그게 아니면 'D'

// const scroe = Number(window.prompt("양수,음수,0?"));

// if (scroe > 0) {
//   console.log("양수");
// } else if (scroe < 0) //   Console.log("음수");
// } else {
//   console.log("0");
// }

// const mathScore = Number(window.prompt("수학 점수 입력:"));

// if (mathScore >= 90) {
//   console.log("A");
// } else if (mathScore >= 80) {
//   console.log("B");
// } else if (mathScore >= 70) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// const num = Number(window.prompt("숫자 입력"));
// num % 2 ===  1 홀수
// num % 2 ===  0 짝수

// 숫자 입력, 양의 홀수, 양의 짝수, 음의 홀수, 음의 짝수, 0?

// const num = Number(window.prompt("숫자 입력"));
// const isPositive = num > 0;
// const isNegative = num < 0;
// const isOdd = num % 2 === 0;
// const isEven = num % 2 === 0;

// if (isPositive && isOdd) {
//   console.log("양의홀수");
// } else if (isPositive && isEven) {
//   console.log("양의짝수");
// } else if (isNegative && isOdd) {
//   console.log("음의홀수");
// } else if (isNegative && isEven) {
//   console.log("음의짝수");
// } else {
//   console.log("zero");
// }

const age = 10;
if (age > 5) {
  if (age > 7) {
    if (age > 13) console.log("청소년");
  } else {
    console.log("유소년");
  }
}

// swich
const x = "봄";

switch (season) {
  case "봄": {
    console.log("날이 좋아요");
    break;
  }
  case "여름": {
    console.log("날이 더워요");
    break;
  }
  case "가을": {
    console.log("날이 쌀쌀해요");
    break;
  }
  case "겨울": {
    console.log("날이 추워요");
    break;
  }
}
