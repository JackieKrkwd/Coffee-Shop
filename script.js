"use strict";

let menuItems = [
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
];

let itemContainer = document.querySelector(".item-container");
let cartArray = [];
let cartContainer = document.querySelector(".cart");

itemContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("addToCart")) {
    let index = e.target.getAttribute("data-index");
    cartArray.push(menuItems[index]);
    displayInCart();
  }
});

const display = () => {
  itemContainer.innerHTML = "";
  menuItems.forEach((item, index) => {
    let card = document.createElement("div");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = item.name;
    let categoryParagraph = document.createElement("p");
    categoryParagraph.innerText = item.category;
    let descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerText = item.description;
    let priceParagraph = document.createElement("p");
    priceParagraph.innerText = item.price;
    let addMenuItem = document.createElement("button");
    addMenuItem.classList.add("addToCart");
    addMenuItem.innerText = "add to cart";
    addMenuItem.setAttribute("data-index", index);
    card.append(
      nameParagraph,
      categoryParagraph,
      descriptionParagraph,
      priceParagraph,
      addMenuItem
    );
    itemContainer.append(card);
  });
};
display();

const displayInCart = () => {
  cartContainer.innerHTML = "";
  cartArray.forEach((item) => {
    let card = document.createElement("div");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = item.name;
    let priceParagraph = document.createElement("p");
    priceParagraph.innerText = item.price;
    card.append(nameParagraph, priceParagraph);
    cartContainer.append(card);
  });
};
