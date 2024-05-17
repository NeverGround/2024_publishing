const MinusBtn = document.querySelector(".minusBtn");
const PlusBtn = document.querySelector(".plusBtn");
const ticketSpan = document.querySelector(".ticketAmount");
const totalPriceSpan = document.querySelector(".totalPrice");
const ticketPrice = 10000;

PlusBtn.addEventListener("click", () => {
  let ticketCount = Number(ticketSpan.innerText) + 1;
  ticketSpan.innerText = ticketCount;

  let totalPrice = ticketCount * ticketPrice;

  if (ticketCount >= 10) {
    totalPrice = totalPrice * 0.8;
  } else if (ticketCount >= 5) {
    totalPrice = totalPrice * 0.9;
  }

  totalPriceSpan.innerText = totalPrice;
});

MinusBtn.addEventListener("click", () => {
  let ticketCount = Number(ticketSpan.innerText) - 1;

  if (ticketCount < 0) {
    ticketCount = 0;
  }
  ticketSpan.innerText = ticketCount;

  let totalPrice = ticketCount * ticketPrice;

  if (ticketCount >= 10) {
    totalPrice = totalPrice * 0.8;
  } else if (ticketCount >= 5) {
    totalPrice = totalPrice * 0.9;
  }

  totalPriceSpan.innerText = totalPrice;
});
