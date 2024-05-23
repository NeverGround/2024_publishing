// 참조 타입: Array, Object, Function <-> Element
// 프로그래밍 타입) Array, Object, Fuction
// HTML에서 가져온 타입) Element, Event

// const input = document.querySelector(".input");
// input.addEventListener("input", (e) => {
//   e.target.value.length > 10
//     ? (input.style.color = "red")
//     : (input.style.color = "black");
// });

// const input1 = document.querySelector(".input");
// input1.addEventListener("click", (e) => {
//   e.target.value =
//     e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
// });

/////
const input = document.querySelector(".input");
input.addEventListener("click", (e) => {
  e.target.value ? e.target.value.length : e.target.value;
  input.width = "200px";
  input.height = "55px";
  console.log("${input}");
});

const input1 = document.querySelector(".input1");
input.addEventListener("click", (e) => {
  e.target.value < 8 ? e.target.value.length(8) : e.target.value;
  e.style.target = "👁‍🗨";
  input.width = "200px";
  input.height = "55px";
  console.log("${input1}");
});
const input2 = document.querySelector(".input2");
input.addEventListener("click", (e) => {
  e.target.value < 8 ? e.target.value.length(8) : e.target.value;
  e.style.target = "👁‍🗨";
  input1.width = "200px";
  input1.height = "55px";
  console.log("${input2}");
});
const box = document.querySelector(".box");
box.style.display = "flex";
box.style.width = "300px";
box.style.height = "55px";
box.style.color = "white";
box.style.backgroundColor = "black";

///
