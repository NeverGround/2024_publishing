import { backendData } from "./data.js";

backendData;

// 1. {id, currency, money, phone 만 가져오기} (콘솔만)
// 2. {animal, car:{maker,model,year}} 콘솔로
// 3. ipaddress가 맨 마지막 세 자리가 합이 10 이하이면, {id, color}만 콘솔로 찍기
const c = backendData.filter(({ ipAddress }) => {
  const ipArr = [...ipAddress];
  const lastDotIndex = ipArr.findLastIndex((v) => v === ".");
  const splicedArr = ipArr
    .splice(lastDotIndex + 1, ipArr.length)
    .map((v) => parseInt(v));
  const sum = splicedArr.reduce((a, c) => a + c);
  return sum <= 10;
});

// 4. timezone이 알파벳 모음으로 시작하면, {timezone, carmake, phone 앞 세자리만 가져오기}
// 5. money가 50000만 이하이면,  {phone[하이픈 제거]과 appName[대문자화하고] 가져오기}

const cardList = document.querySelector(".cardList");

const makeImgTag = (id) => `
  <img src="${imageURL}" alt="" />
`;

const makeEmailTag = (currency) => {
  const userEmail = email.split("@")[0];
  return `<div class="email">${userEmail}</div>`;
};

const makeSsnTag = (money) => `<div class="ssn">${ssn}</div>`;

const makeCardTag = (phone) => {
  const maskedCard = [...card].map((v, i) => (i < 4 ? "*" : v)).join("");
  return `<div class="cardNumber">${maskedCard}</div>`;
};

data.forEach((v) => {
  cardList.insertAdjacentHTML(
    "beforeend",
    `
      <div class="card">
        <div class="cardImage">
          ${makeImgTag(v.id)}
        </div>
        <div class="info">
          ${makeEmailTag(v.currency)}
          ${makeSsnTag(v.money)}
          ${makeCardTag(v.phone)}
        </div>
      </div>
    `
  );
});
