import { dagym } from "./dagym.js";

// 데이터 가져오기
const data = dagym();
const datas = data[0].result;

// 이미지 슬라이더 요소
const container = document.querySelector(".container");

if (container) {
  // 이미지 슬라이더 데이터 가져오기
  const sliderData = datas.homeEvent;

  // 이미지 슬라이더 생성
  sliderData.forEach(({ imageUrl }) => {
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    container.appendChild(imageElement);
  });
}

// 카테고리 요소
const category = document.querySelector(".category");

if (category) {
  // 카테고리 데이터 가져오기
  const categoryData = datas.gyms;

  // 카테고리 생성
  categoryData.forEach(({ gymName, listImgUrl }) => {
    const categoryElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const titleElement = document.createElement("span");

    imageElement.src = listImgUrl;
    imageElement.classList.add("category-img");
    titleElement.innerText = gymName;

    categoryElement.appendChild(imageElement);
    categoryElement.appendChild(titleElement);
    category.appendChild(categoryElement);
  });
}

// 제품 요소
const productContainer = document.querySelector(".product");

if (productContainer) {
  // 제품 데이터 가져오기
  const productData = datas.gyms;

  // 제품 생성
  productData.forEach(({ gymName, listImgUrl }) => {
    const productElement = document.createElement("div");
    const imageElement = document.createElement("img");
    const boxElement = document.createElement("div");
    const salePrice = document.createElement("span");
    const price = document.createElement("span");
    const brandName = document.createElement("span");
    const textAll = document.createElement("span");

    imageElement.src = listImgUrl;
    salePrice.innerText = "10%"; // 임의의 할인율
    price.innerText = "10000"; // 임의의 가격
    brandName.innerText = gymName;
    textAll.innerText = gymName;

    boxElement.appendChild(salePrice);
    boxElement.appendChild(price);

    productElement.appendChild(imageElement);
    productElement.appendChild(boxElement);
    productElement.appendChild(brandName);
    productElement.appendChild(textAll);
    productContainer.appendChild(productElement);
  });
}
