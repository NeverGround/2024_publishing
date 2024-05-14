// 데이터 타입: 기본 + 참조
// 기본 : 문자, 숫자

// const a = window.prompt("숫자 입력:");
// 문자 -> 숫자 타입 바꾸기

// const a = window.prompt("숫자 입력:");
// 문자 -> 숫자 타입 바꾸기
// 1. Number
// const b = Number(a);
// console.log(b + 10);

// // 2. parseInt(), parseFloat() 문자타입만 넣었을 때 유효
// const c = parseInt(a);
// console.log(c + 20);
//  +, -, *

const firstNum = window.prompt("첫 번째 숫자:");
const firstNumParse = Number(firstNum);
const secondNum = window.prompt("두 번째 숫자:");
const secondNumParse = Number(secondNum);

const numResultDiv = document.createElement("div");
numResultDiv.innerText = `합:${firstNumParse + secondNumParse} 차:${
  firstNumParse - secondNumParse
} 곱: ${firstNumParse * secondNumParse}`;
document.body.appendChild(numResultDiv);

const numAge = Number(window.prompt("몇살?"));
const yearDiv = document.createElement("div");
yearDiv.innerText = `${2025 - numAge}년 생이네요`;
document.body.appendChild(yearDiv);

const side = Number(window.prompt("정사각형의 한 변의 길이"));
const squareDiv = document.createElement("div");
squareDiv.innerText = `정사각형의 넓이:${side * side}`;
document.body.appendChild(squareDiv);
