// input: window.prompt
// output:HTML

//1번문제. 유저에게 밑변과 높이를 입력을 받고 정삼각형 넓이 나타내기
//2번문제. 한국 돈 원을 입력하면 엔화로 바꿔주기

// const Number = window.prompt("밑변");
// const height = window.prompt("높이");

// const trinangle = document.createElement("div");
// trinangle.innerText = `정삼각형 넓이 ${base * height * 0.5}`;
// document.body.appendChild(trinangle);

const won = window.prompt("원화 입력");
const yen_rate = 0.114;
const exchange = document.createElement("div");
exchange.innerText = `엔:${won * yen_rate}`;
document.body.appendChild(exchange);
