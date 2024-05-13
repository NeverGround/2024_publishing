// console.log("자바스크립트! 시작!");
// console.log("미니퀴즈");
// console.log("자바스크립트 공부 다짐");
// console.log("오늘 점심 메뉴 : 김치찌개, 김, 어묵, 스팸, 불고기");

// window.alert("아무거나 쓸께요.");
// window.confirm("아무거나 하자");
// window.prompt("왜안나온데");
// window.scrollTo("0,2000");
// window.open("https://www.naver.com/");

// const a = document.createElement("div");
// a.innerText = "아메리카노";
// a.addEventListener("mouseover", () => {
//   window.alert("메가 커피 짱짱");
// });
// document.body.appendChild(a);

//화면에 버튼 태그를 만들고
// 안의 내용은 석가탄신일
// 클릭을 'click' 하면 alert으로 부처님 오심
// const a = document.createElement("button");
// a.innerText = "석가탄신일";
// a.addEventListener("click", () => {
//   window.alert("부처님오심");
// });
// document.body.appendChild(a);

// 버튼 태그 만들고, 안에 아메리카노
// 클릭을 하면, 라떼
// const a = document.createElement("button");
// a.innerText = "아메리카노";
// a.addEventListener("click", () => {
//   a.innerText = "라떼";
// });
// document.body.appendChild(a);

// const b = window.prompt("무엇이든 물어보살");
// console.log(b);

// 첫번째 prompt 버튼 전의 이름
// 두번째 prompt 버튼 클릭 후 이름
// 클릭전 이름 버튼 만들고, 클릭하면 두번째 클릭 이름으로 바뀜
// const a = window.prompt("첫번째");
// const b = window.prompt("두번째 질문");
// const c = document.createElement("button");
// c.innerText = a;
// c.addEventListener("click", () => {
//   c.innerText = b;

// button 태그 만들고, 배경색을 하늘색, 폰트사이즈 20px,
// 클릭을 하면, 빨간색으로 바뀌는 퀴즈

// const a = document.createElement("div");
// a.innerHTML = "<button>코리아 아이티 </button>";
// a.innerText  = "<button>코리아 아이티 </button>";
// document.body.appendChild(a);
// const a = document.createElement("button");
// a.innerText = "버튼";
// a.style.backgroundColor = "skyblue";
// a.style.fontSize = "20px";
// a.add
// document.body.appendChild(a);

// 버튼이 5개 있음, 빨,주,노,초,파 있음
// 모두 css를 배경색은 각각 해당 색으로 바꾸고, text 빨,주,노,초,파
// div 태그가 w:100 h:100 border:1px solid black 있는데
// 여기서 위의 5개의 버튼 중 하나를 누르면 div의 backgroundcolor가 해당 색으로
// 바뀌는 프로그램

const a = document.createElement("button");
a.innerText = "빨";
a.style.fontSize = "20px";
a.style.background = "red";
a.addEventListener("click" ()=> {
    a.style.background = a;
})
const b = document.createElement("button");
b.innerText = "주";
b.style.fontSize = "20px";
b.style.background = "orange";
const c = document.createElement("button");
c.style.fontSize = "20px";
c.style.background = "yellow";
c.innerText = "노";
const d = document.createElement("button");
d.style.fontSize = "20px";
d.style.background = "green";
d.innerText = "초";
const e = document.createElement("button");
e.style.fontSize = "20px";
e.style.background = "blue";
e.innerText = "파";
const f = document.createElement("button");
f.style.borderRadius = "1px solid black";
document.body.appendChild(a);
