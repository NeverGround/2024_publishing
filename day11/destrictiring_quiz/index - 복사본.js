import { backendData } from './data.js';



const cardList = document.querySelector(".cardList");

// Function to create a card element
const createCard = (data) => {
  // Mask the first 4 characters with asterisks
  const maskedCard = "****" + data.card.slice(4);
  
  // Extract email ID
  const emailID = data.email.split('@')[0];

  const cardHTML = `
    <div class="card">
      <div class="imageBox">
        <img src="${data.image}" alt="" />
      </div>
      <div class="textBox">
        <h1>${maskedCard}</h1>
        <span class="text">${data.description}</span>
        <div class="option">SHARE LEARN MORE</div>
        <span class="option1">${emailID}</span>
      </div>
    </div>
  `;
  
  return cardHTML;
};

const generateCards = () => {
  for (let i = 0; i < 200; i++) {
    backendData.forEach(data => {
      const cardHTML = createCard(data);
      cardList.innerHTML += cardHTML;
    });
  }
};

generateCards();

