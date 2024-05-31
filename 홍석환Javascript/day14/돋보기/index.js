import { index } from "./multi.js";

document.addEventListener("DOMContentLoaded", function () {
  const eventContainer = document.getElementById("event-container");
  const data = index();

  data.pageProps.events.forEach((event) => {
    const eventCard = document.createElement("div");
    eventCard.classList.add("event-card");

    const eventImage = document.createElement("img");
    eventImage.src = event.titleImage;
    eventImage.alt = event.title;
    eventImage.classList.add("event-image");

    const eventDetails = document.createElement("div");
    eventDetails.classList.add("event-details");

    const eventTitle = document.createElement("h2");
    eventTitle.textContent = event.title;

    const eventHospital = document.createElement("p");
    eventHospital.textContent = `병원: ${event.hospitalName}`;

    const eventCost = document.createElement("p");
    eventCost.textContent = `가격: ${event.discountedCost.toLocaleString()}원 (할인율: ${
      event.discountRate
    }%)`;

    const eventRating = document.createElement("p");
    eventRating.textContent = `평점: ${event.rating} (${event.ratingCount}명)`;

    eventDetails.appendChild(eventTitle);
    eventDetails.appendChild(eventHospital);
    eventDetails.appendChild(eventCost);
    eventDetails.appendChild(eventRating);
    eventCard.appendChild(eventImage);
    eventCard.appendChild(eventDetails);

    eventContainer.appendChild(eventCard);
  });
});
