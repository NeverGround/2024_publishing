const first = window.prompt("#1abc9c");
const second = window.prompt("#3498db");
const third = window.prompt("#e74c3c");

const buttonfirst = document.createElement("button");
const buttonsecond = document.createElement("button");
const buttonthird = document.createElement("button");
const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.innerText = "선택된 색상 없음";

buttonfirst.style.backgroundColor = first;
buttonsecond.style.backgroundColor = second;
buttonthird.style.backgroundColor = third;

buttonfirst.innerText = first;
buttonsecond.innerText = second;
buttonthird.innerText = third;

buttonfirst.addEventListener("click", () => {
  box.style.backgroundColor = first;
  box.innerText = `선택된 색상:${first}`;
});
buttonsecond.addEventListener("click", () => {
  box.style.backgroundColor = second;
  box.innerText = `선택된 색상:${second}`;
});
buttonthird.addEventListener("click", () => {
  box.style.backgroundColor = third;
  box.innerText = `선택된 색상:${third}`;
});

document.body.appendChild(buttonfirst);
document.body.appendChild(buttonsecond);
document.body.appendChild(buttonthird);
document.body.appendChild(box);
