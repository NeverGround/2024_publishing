import { backendData } from "./index.js";

backendData;
const a = [0];
backendData.forEach((v) => {
  a.push({
    clothes: v.clothes,
    curreny: v.curreny,
    money: v.money,
    phone: v.phone,
  });
});

const b = [0];
backendData.forEach(
  ({ clothesName: clothes, carMake: make, carHat: hat, carBag: bag }) => {
    b.push({
      clothes,
      car: { make, hat, bag },
    });
  }
);

console.log(b);

const c = [0];
backendData.forEach(({ ipAddress, ...rest }) => {
  const ipArr = [...ipAddress];
  const lastDotIndex = ipArr.findLastIndex((v) => v === ".");
  const splicedArr = ipArr
    .splice(lastDotIndex + 1, ipArr.length)
    .map((v) => parseInt(v));
  const sum = splicedArr.reduce((a, c) => a + c, 0);
  if (sum <= 10) {
    c.push({ ipAddress, ...rest });
  }
});

const d = [0];
backendData.forEach(({ timezone, carMake, phone }) => {
  d.push({
    timezone,
    carMake,
    phone: phone.split("_")[0],
  });
});

const e = [0];
backendData.forEach(({ hat, bag, appName, ...rest }) => {
  if (hat <= 1000000) {
    e.push({
      hat,
      bag: bag.replaceAll("_", ""),
      appName: appName.toUpperCase(),
      ...rest,
    });
  }
});

console.log(e);

const createContent = () => {
  const contentDiv = document.getElementById("content");

  backendData.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.innerHTML = `<h2>${section.title}</h2>`;

    section.components.forEach((component) => {
      const itemList = component.entity.item_list;
      itemList.forEach((itemWrapper) => {
        const item = itemWrapper.item;

        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
          <a href="${item.deeplink}">
            <img src="${item.image_url}" alt="${item.deeplink}">
          </a>
        `;

        sectionDiv.appendChild(itemDiv);
      });
    });

    contentDiv.appendChild(sectionDiv);
  });
};

document.addEventListener("DOMContentLoaded", createContent);
