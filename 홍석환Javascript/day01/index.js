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

const a = document.createElement("div");
a.style.width = "100px";
a.style.height = "100px";
a.style.border = "1px solid black";
b.innerText = "빨";
b.addEventListener("click", ()=> {
    backgroundcolor = "red";
});
c.innerText = "주";
c.addEvnetListener("click", ()=> {
    backgroundcolor = "orange";
});
d.innerText = "노";
d.addEventListener("click", ()=> {
    backgroundcolor = "yellow";
});
e.innerText = "초";
e.addEventListener("click", () => {
    backgroundcolor = "green";
});
f.innerText = "파";
f.addEventListener("click", () => {
    backgroundcolor = "blue";
});
document.body.appendChild(a);