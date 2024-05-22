//함수(기능) : [input -> output]

// 일반함수
// function 함수명 (매개변수){return 리턴값}
// function makeCoffee(x) {
//   return x + "완료되었습니다.";
// }

// const a = makeCoffee("아메리카노");
// const b = makeCoffee("연유라떼");
// console.log(a, b);

// function makeSquare(x) {
//   return x ** 2;
// }
// 화살표 함수
// () => {};

// const makeBread = (x) => {
//   return x + "빵이 완료되었습니다.";
// };

// const a = makeBread("단팥");
// console.log(a);

// 1. 어떤 수를 입력하면 세제곱을 돌려주는 함수
// 2. 대문자를 입력하면, 소문자 + "완료!"를 돌려주는 함수
// 3. 어떤 x를 입력하면, trutyh 인지 falsy인지 알려주는 함수

// const makeCube = (x) => x ** 3;
// const makeLower = (x) => x.toLowerCase() + " 완료!";
// const isTruthy = (x) => (!!x ? "truthy" : "falsy");

// x가 들어오면 body태그에 x의 innerText를 가진 버튼을 추가해주는 함수

const makebutton = (x) => {
  const btn = document.createElement("button");
  btn.innerText = x;
  document.body.appendChild(btn);
};
