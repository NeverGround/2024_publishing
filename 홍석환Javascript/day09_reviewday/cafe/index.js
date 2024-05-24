// const coffee = document.createElement("div");
// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");
// const btn4 = document.createElement("button");
// const btn5 = document.createElement("button");
// const btn6 = document.createElement("button");
// const btn7 = document.createElement("button");
// const btn8 = document.createElement("button");
// const btn9 = document.createElement("button");
// const btn10 = document.createElement("button");
// const btn11 = document.createElement("button");
// const btn12 = document.createElement("button");
// const btn13 = document.createElement("button");
// const btn14 = document.createElement("button");
// const btn15 = document.createElement("button");
// const btn16 = document.createElement("button");
// const btn17 = document.createElement("button");
// btn1.innerText = "아메리카노";
// btn2.innerText = "라떼";
// btn3.innerText = "레몬에이드";
// btn4.innerText = "솔의눈";
// btn5.innerText = "카스";
// btn6.innerText = "바나나우유";
// btn7.innerText = "사이다";
// btn8.innerText = "제로콜라";
// btn9.innerText = "데자와";
// btn10.innerText = "비타오백";
// btn11.innerText = "요거트 스무디";
// btn12.innerText = "초코우유";
// btn13.innerText = "돌체라떼";
// btn14.innerText = "딸기라떼";
// btn15.innerText = "민트라떼";
// btn16.innerText = "비타천";
// btn17.innerText = "테라";

// // 총액
// const total = document.createElement("div");
// let totalPrice = 0;
// total.innerText = totalPrice;

// btn1.addEventListener("click", () => {
//   totalPrice += 3000;
//   total.innerText = totalPrice;
// });

// btn2.addEventListener("click", () => {
//   totalPrice += 4000;
//   total.innerText = totalPrice;
// });

// btn3.addEventListener("click", () => {
//   totalPrice += 3500;
//   total.innerText = totalPrice;
// });

// btn4.addEventListener("click", () => {
//   totalPrice += 2500;
//   total.innerText = totalPrice;
// });
// btn5.addEventListener("click", () => {
//   totalPrice += 4000;
//   total.innerText = totalPrice;
// });
// btn6.addEventListener("click", () => {
//   totalPrice += 2000;
//   total.innerText = totalPrice;
// });
// btn7.addEventListener("click", () => {
//   totalPrice += 1500;
//   total.innerText = totalPrice;
// });
// btn8.addEventListener("click", () => {
//   totalPrice += 2000;
//   total.innerText = totalPrice;
// });
// btn9.addEventListener("click", () => {
//   totalPrice += 3000;
//   total.innerText = totalPrice;
// });
// btn10.addEventListener("click", () => {
//   totalPrice += 500;
//   total.innerText = totalPrice;
// });
// btn11.addEventListener("click", () => {
//   totalPrice += 6000;
//   total.innerText = totalPrice;
// });
// btn12.addEventListener("click", () => {
//   totalPrice += 3000;
//   total.innerText = totalPrice;
// });
// btn13.addEventListener("click", () => {
//   totalPrice += 4000;
//   total.innerText = totalPrice;
// });
// btn14.addEventListener("click", () => {
//   totalPrice += 3500;
//   total.innerText = totalPrice;
// });
// btn15.addEventListener("click", () => {
//   totalPrice += 5000;
//   total.innerText = totalPrice;
// });
// btn16.addEventListener("click", () => {
//   totalPrice += 1000;
//   total.innerText = totalPrice;
// });
// btn17.addEventListener("click", () => {
//   totalPrice += 2500;
//   total.innerText = totalPrice;
// });
// document.body.appendChild(btn1);
// document.body.appendChild(btn2);
// document.body.appendChild(btn3);
// document.body.appendChild(btn4);
// document.body.appendChild(btn5);
// document.body.appendChild(btn6);
// document.body.appendChild(btn7);
// document.body.appendChild(btn8);
// document.body.appendChild(btn9);
// document.body.appendChild(btn10);
// document.body.appendChild(btn11);
// document.body.appendChild(btn12);
// document.body.appendChild(btn13);
// document.body.appendChild(btn14);
// document.body.appendChild(btn15);
// document.body.appendChild(btn16);
// document.body.appendChild(btn17);
// document.body.appendChild(total);

const menus = [
  {
    coffeeName: "아메리카노",
    coffeePrice: 3000,
  },
  {
    coffeeName: "라떼",
    coffeePrice: 3500,
  },

  {
    coffeeName: "레몬에이드",
    coffeePrice: 3500,
  },
  {
    coffeeName: "솔의눈",
    coffeePrice: 2500,
  },
  {
    coffeeName: "카스",
    coffeePrice: 4000,
  },
  {
    coffeeName: "바나나우유",
    coffeePrice: 2000,
  },
  {
    coffeeName: "사이다",
    coffeePrice: 1500,
  },
  {
    coffeeName: "제로콜라",
    coffeePrice: 2000,
  },
  {
    coffeeName: "데자와",
    coffeePrice: 3000,
  },
  {
    coffeeName: "비타오백",
    coffeePrice: 500,
  },
  {
    coffeeName: "요거트 스무디",
    coffeePrice: 6000,
  },
  {
    coffeeName: "초코우유",
    coffeePrice: 3000,
  },
  {
    coffeeName: "돌체라떼",
    coffeePrice: 4000,
  },
  {
    coffeeName: "딸기라떼",
    coffeePrice: 3500,
  },
  {
    coffeeName: "민트라떼",
    coffeePrice: 5000,
  },
  {
    coffeeName: "비타천",
    coffeePrice: 1000,
  },
  {
    coffeeName: "테라",
    coffeePrice: 2500,
  },
];

const makeName = (name) => {
  const h3 = document.createElement("h3");
  h3.innerText = name;
  return h3;
};
const makePrice = (price) => {
  const h5 = document.createElement("h5");
  h5.innerText = price + "원";
  return h5;
};

const makeButton = (price) => {
  const btn = document.createElement("button");
  btn.innerText = "추가하기";
  btn.addEventListener("click", () => {
    const total = document.querySelector(".total");
    total.inneText = parseInt(total.innerText) + price + "원";
  });
  return btn;
};
const makeCoffee = (coffeeObj) => {
  const coffeeBox = document.createElement("div");
  coffeeBox.appendChild(makeName(coffeeObj.coffeeName));
  coffeeBox.appendChild(makePrice(coffeeObj.coffeePrice));
  coffeeBox.appendChild(makeButton(coffeeObj.coffeePrice));
  document.querySelector(".menu").appendChild(coffeeBox);
};
menus.forEach((v) => makeCoffee(v));

// 감상평 : 함수를 많이 알면 알수록 다양하면서도 간단하게 할 수 있다는 걸 느꼈다. 그러나 함수들을 활용하려고 하면 복잡해서 익숙하지가 않고 어렵다.
