import { dagym } from "./dagym.js";


// 데이터 가져오기
const data = index();
const datas = data[0].components;

// 이미지 슬라이더 요소
const container = document.querySelector(".container");

if (container) {
    // 이미지 슬라이더 데이터 가져오기
    const sliderData = datas[0].entity.item_list;

    // 이미지 슬라이더 생성
    sliderData.forEach(({ item }) => {
        const imageElement = document.createElement("img");
        imageElement.src = `${item.image_url}`;
        container.appendChild(imageElement);
    });
}

// 카테고리 요소
const category = document.querySelector(".category");

if (category) {
    // 카테고리 데이터 가져오기
    const categoryData = datas[1].entity.item_list;

    // 카테고리 생성
    categoryData.forEach(({ item }) => {
        const categoryElement = document.createElement("div");
        const imageElement = document.createElement("img");
        const titleElement = document.createElement("span");

        imageElement.src = `${item.representative_image}`;
        imageElement.classList.add("category-img");
        titleElement.innerText = `${item.name}`;

        categoryElement.appendChild(imageElement);
        categoryElement.appendChild(titleElement);
        category.appendChild(categoryElement);
    });
}

// 제품 요소
const productContainer = document.querySelector(".product");

if (productContainer) {
    // 제품 데이터 가져오기
    const productData = datas[3].entity.item_list;

    // 제품 생성
    productData.forEach(({ item }) => {
        const productElement = document.createElement("div");
        const imageElement = document.createElement("img");
        const boxElement = document.createElement("div");
        const salePrice = document.createElement("span");
        const price = document.createElement("span");
        const brandName = document.createElement("span");
        const textAll = document.createElement("span");

        imageElement.src = `${item.image}`;
        salePrice.innerText = `${item.discount_rate}%`;
        price.innerText = `${item.price.toLocaleString()}`;
        brandName.innerText = `${item.market_name}`;
        textAll.innerText = `${item.name}`;

        boxElement.appendChild(salePrice);
        boxElement.appendChild(price);

        productElement.appendChild(imageElement);
        productElement.appendChild(boxElement);
        productElement.appendChild(brandName);
        productElement.appendChild(textAll);
        productContainer.appendChild(productElement);
    });
}
