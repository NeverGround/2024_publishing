import { backendData } from './data.js';

const cardList = document.querySelector(".cardList");

const makeImgTag = (imageURL) => `
  <img src="${imageURL}" alt="" />
`;

const makeEmailTag = (email) => {
  const userEmail = email.split("@")[0];
  return `<div class="email">${userEmail}</div>`;
};

const makeSsnTag = (ssn) => `<div class="ssn">${ssn}</div>`;

const makeCardTag = (card) => {
  const maskedCard = card.split('').map((v, i) => (i < 4 ? "*" : v)).join("");
  return `<div class="cardNumber">${maskedCard}</div>`;
};

backendData.forEach(profile => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    ${makeImgTag(profile.imageURL)}
    <div>ID: ${profile.id}</div>
    <div>Currency: ${profile.currency}</div>
    <div>Money: ${profile.money}</div>
    <div>Phone: ${profile.phone}</div>
    ${makeEmailTag(profile.email)}
    ${makeSsnTag(profile.ssn)}
    ${makeCardTag(profile.card)}
  `;
  cardList.appendChild(card);
});

// 1. {id, currency, money, phone 만 가져오기} (콘솔만)
function logBasicInfo() {
  const basicInfo = backendData.map(profile => ({
    id: profile.id,
    currency: profile.currency,
    money: profile.money,
    phone: profile.phone
  }));
  console.log("Basic Info:", basicInfo);
}

// 2. {animal, car:{maker,model,year}} 콘솔로
function logAnimalAndCarInfo() {
  const animalAndCarInfo = backendData.map(profile => ({
    animal: profile.animal,
    car: {
      maker: profile.car.maker,
      model: profile.car.model,
      year: profile.car.year
    }
  }));
  console.log("Animal and Car Info:", animalAndCarInfo);
}

// 3. ipaddress가 맨 마지막 세 자리가 합이 10 이하이면, {id, color}만 콘솔로 찍기
function logSpecificIpInfo() {
  const specificIpInfo = backendData.filter(profile => {
    const ipLastDigits = profile.ipaddress.split('.').pop();
    const sum = ipLastDigits.split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    return sum <= 10;
  }).map(profile => ({
    id: profile.id,
    color: profile.color
  }));
  console.log("Specific IP Info:", specificIpInfo);
}

// 4. timezone이 알파벳 모음으로 시작하면, {timezone, carmake, phone 앞 세자리만 가져오기}
function logVowelTimezoneInfo() {
  const vowelTimezoneInfo = backendData.filter(profile => /^[aeiou]/i.test(profile.timezone[0]))
    .map(profile => ({
      timezone: profile.timezone,
      carmake: profile.car.maker,
      phonePrefix: profile.phone.slice(0, 3)
    }));
  console.log("Vowel Timezone Info:", vowelTimezoneInfo);
}

// 5. money가 50000만 이하이면, {phone[하이픈 제거]과 appName[대문자화하고] 가져오기}
function logSpecificMoneyInfo() {
  const specificMoneyInfo = backendData.filter(profile => profile.money <= 50000)
    .map(profile => ({
      phone: profile.phone.replace(/-/g, ''),
      appName: profile.appName.toUpperCase()
    }));
  console.log("Specific Money Info:", specificMoneyInfo);
}

// 실행
logBasicInfo();
logAnimalAndCarInfo();
logSpecificIpInfo();
logVowelTimezoneInfo();
logSpecificMoneyInfo();
