//커피 input
//가격 input - 숫자여야만하고 [1000 이상 부터 가능]
// - 1000원 이상 입력 해야 합니다.
//수량 input - 숫자여야만 하지만 [1~10000 가능]
// - 1~10000 개수여야 합니다.
// 제출하기 button
// 3개 글자가 0이 아니여야 제출이 가능함

// 커피 재고 리스트
// 아메리카노 3000원 10000개
// 라떼 3500원 3000개

// 맨 밑에 총 갯수: 13000개

const coffeeInput = document.querySelector(".coffeeInput");
const priceInput = document.querySelector(".priceInput");
const amountInput = document.querySelector(".amountInput");
const submit = document.querySelector(".submit");
const WarnMsg = document.querySelector(".WarnMsg");
const coffeeList = document.querySelector(".coffeeList");
const totalAmount = document.querySelector(".totalAmount");

submit.addEventListener("click", () => {
  const cv = coffeeInput.value;
  const pv = priceInput.value;
  const av = amountInput.value;

  const isValidEmpty = !!cv.length && !!pv.length && !!av.length;
  const isValidPrice = 1000 <= Number(pv);
  const isValidAmount = 1 <= Number(av) && Number(av) <= 10000;

  WarnMsg.style.color = "red";
  if (!isValidEmpty) {
    WarnMsg.innerText = `빈칸을 모두 기입해주세요!`;
  } else if (!isValidPrice) {
    WarnMsg.innerText = `가격은 1000원 이상이어야 합니다!`;
  } else if (!isValidAmount) {
    WarnMsg.innerText = `수량은 1에서 10000 사이여야 합니다!`;
  } else {
    WarnMsg.innerText = ``;
    WarnMsg.style.color = "black";

    const divTag = document.createElement("div");
    divTag.innerText = `커피 이름: ${cv} 가격: ${pv} 수량: ${av}`;
    coffeeList.appendChild(divTag);

    totalAmount.innerText = Number(totalAmount.innerText) + Number(av);
  }
});
