import cars from "./cars.js";
const products = document.querySelector(".products");
const heading = document.querySelector("h1");
const loading = document.querySelector(".loading");
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

setTimeout(() => {
  products.style.display = "block";
  heading.style.display = "block";
  loading.style.display = "none";
}, 1000);
