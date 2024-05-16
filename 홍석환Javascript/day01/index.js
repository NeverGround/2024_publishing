// console.log("자바스크립트! 시작!");
// console.log("미니퀴즈");
// console.log("자바스크립트 공부 다짐");
// console.log("오늘 점심 메뉴 : 김치찌개, 김, 어묵, 스팸, 불고기");

// window.alert("아무거나 쓸께요");
// window.confirm("아무거나 하자");
// window.prompt("왜 안 나온데?");
// window.scrollTo(0,1250);
// window.open("https://www.naver.com/");

// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//     window.alert("메가커피짱짱");
// });
// document.body.appendChild(a);

// const a = document.createElement("button");
// a.innerText = "석가탄신일";
// a.addEventListener("click", ()=> {
//     window.alert("부처님오심");
// });
// document.body.appendChild(a);

// const a = document.createElement("button");
// a.innerText = "아케리카노";
// a.addEventListener("click", ()=>{
//     a.innerText = "라떼";
// });
// document.body.appendChild(a);

// const a = window.prompt("첫번째");
// const b = window.prompt("두번째 질문");
// const c = document.createElement("button");
// c.innerText = a;
// c.addEventListener("click", () => {
//     c.innerText = b;
// });
// document.body.appendChild(c);

// const b = window.prompt("무엇이든 물어보살");
// console.log(b);

//const a = document.createElement("div");
//a.innerHtml = "<button>코리아 아이티 </button>";
//a.innerText = "<button>코리아 아이티 </button>";
//document.body.appendChild(a);

//const a = document.createElement("button");
//a.innerText = "버튼";
//a.style.backgroundColor = "skyblue";
//a.style.fontSize = "20px";
//a.addEventListener("click", ()=>{
//a.innerText = b;
//});
//document.body.appendChild(a);

const red = document.createElement("button");
const orange = document.createElement("button");
const yellow = document.createElement("button");
const green = document.createElement("button");
const blue = document.createElement("button");

red.innerText = "빨";
orange.innerText = "주";
yellow.innerText = "노";
green.innerText = "초";
blue.innerText = "파";

red.style.backgroundColor = "red";
orange.style.backgroundColor = "orange";
yellow.style.backgroundColor = "yellow";
green.style.backgroundColor = "green";
blue.style.backgroundColor = "blue";

const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

red.addEventListener("click", () => {
  div.style.backgroundColor = "red";
});
orange.addEventListener("click", () => {
  div.style.backgroundColor = "orange";
});
yellow.addEventListener("click", () => {
  div.style.backgroundColor = "yellow";
});
green.addEventListener("click", () => {
  div.style.backgroundColor = "green";
});
blue.addEventListener("click", () => {
  div.style.backgroundColor = "blue";
});
document.body.appendChild(red);
document.body.appendChild(orange);
document.body.appendChild(yellow);
document.body.appendChild(green);
document.body.appendChild(blue);

document.body.appendChild(div);
