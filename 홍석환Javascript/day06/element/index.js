// js : html 생성하고, css도 만들고, 기능을 넣었음
// 기본 타입 : string,number,boolean,null,undefined
// 참조 타입: array, element

const divTag = document.createElement("div");
// divTag.appendChild() 자식 태그 추가하기
// divTag.removeChild() 자식에 해당 태그 지우기

// divTag.style           직접 css 관여
// divTag.classList       클래스 리스트 보기
// divTag.classList.classList.add("red") 클래스 리스트에 red 추가
// divTag.classList.remove("red") 클래스 리스트에 red 삭제
// divTag.classList.toggle("red") 클래스 리스트에 red가 있으면 삭제 없으면 추가

const box = document.querySelector(".box");
const radiusBtn = document.querySelector(".radiusBtn");
const sizeBtn = document.querySelector(".sizeBtn");
const colorBtn = document.querySelector(".colorBtn");

sizeBtn.addEventListener("click", () => {
  sizeBtn.innerText = sizeBtn.innerText == "늘리기" ? "줄이기" : "늘리기";
  box.classList("medium");
  box.classList("large");
});

colorBtn.addEventListener("click", () => {
  colorBtn.innerText = sizeBtn.innerText == "빨간색" ? "파란색" : "빨간색";
  box.classList("red");
  box.classList("blue");
});

colorBtn.addEventListener("click", () => {
  colorBtn.innerText =
    sizeBtn.innerText == "테두리 직각" ? "테두리 둥글게" : "테두리 직각";
  box.classList("borderRadiusZero");
  box.classList("borderRadiusRound");
});
