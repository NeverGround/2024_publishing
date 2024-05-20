// if / swith

// 1. if
const isOverWeight = true;
if (isOverWeight == true) {
  console.log("과체중입니다.");
} else {
  console.log("정상입니다.");
}

// 2. swithc

const user = "관리자";

switch (user) {
  case "관리자":
    console.log("관리자 로그인");
    break;
  case "일반유저":
    console.log("일반유저 로그인");
    break;
}

const arr = ["아메리카노", "라떼", "민트", "바닐라"];
arr.forEach((v, i) => {
  if (i % 2 == 0) console.log(`${i}. ${v}`);
  arr.push = "민트";
});
