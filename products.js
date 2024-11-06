import cars from "./cars.js";
const products = document.querySelector(".products");

cars.forEach((car) => {
  const elem = document.createElement("div");
  elem.className = "product";
  elem.innerHTML = `
    <div class="image">
        <img src="${car.image}" />
    </div>
    <div class="details">
        <div class="name">${car.name}</div>
        <div class="brand">${car.brand}</div>
        <div class="description">${car.description}</div>
        <button class="buy-btn">BUY NOW</button>
    </div>
  `;
  products.appendChild(elem);
});

console.log("prodcuts");
