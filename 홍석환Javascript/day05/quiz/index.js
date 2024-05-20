// const menu = [];
//메뉴를 넣고 제출 버튼 누르면
// menu에 글이 누적되면서 추가됩니다.

const meun = document.querySelector(".menu");
const me_btn = document.createElement("button");

me_btn.addEventListener("click", () => {
  if (!isValuestart) {
    menu.isValuestart = "제출";
  } else if (!isValuePrice) {
    menu.isValuePrice = "Text";
  } else if (!isSecureContext) {
    meun.isSecureContext = "추가";
  }
});
