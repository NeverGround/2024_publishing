const palette = document.createElement("div");
const color = document.createElement("button");
const red_btn = document.createElement("button");
const green_btn = document.createElement("button");
const blue_btn = document.createElement("button");
const plus_btn = document.createElement("button");
const minus_btn = document.createElement("button");

palette.style.width = "100px";
palette.style.height = "100px";
color.innerText = "선택된 색상 : 없음";
palette.appendChild(color);

red_btn.style.backgroundColor = "red";
red_btn.innerText = "red";
green_btn.style.backgroundColor = "green";
green_btn.innerText = "green";
blue_btn.style.backgroundColor = "blue";
blue_btn.innerText = "blue";
plus_btn.innerText = "+";
minus_btn.innerText = "-";

red_btn.addEventListener("click", () => {
  palette.style.backgroundColor = "red";
  color.innerText = "선택된 색상 : red";
});
green_btn.addEventListener("click", () => {
  palette.style.backgroundColor = "green";
  color.innerText = "선택된 색상 : green";
});
blue_btn.addEventListener("click", () => {
  palette.style.backgroundColor = "blue";
  color.innerText = "선택된 색상: blue";
});

minus_btn.addEventListener("click", () => {
  const length = parseInt(palette.style.width) - 1;
  const isLength99 = length === 99;
  palette.style.width = isLength99 ? "100px" : `${length}px`;
  palette.style.height = isLength99 ? "100px" : `${length}px`;
});

plus_btn.addEventListener("click", () => {
  const length = parseInt(palette.style.width) + 1;
  palette.style.width = `${length}px`;
  palette.style.height = `${length}px`;
});

document.body.appendChild(palette);
document.body.appendChild(red_btn);
document.body.appendChild(green_btn);
document.body.appendChild(blue_btn);
document.body.appendChild(plus_btn);
document.body.appendChild(minus_btn);
