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
    image: 'https:images.app.goo.gl/LZmvocS43bYC5SW39',//img
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

//ADD TO CART
let total = 0;
let totalParagraph = document.querySelector(".total");
itemContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("addToCart")) {
    total = 0;
    let index = e.target.getAttribute("data-index");
    cartArray.push(menuItems[index]);
    cartArray.forEach((product) => {
      let amount = product.price;
      total += amount;
      totalParagraph.innerText = `Total: ${total}`;
    })
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
  cartArray.forEach((item, index) => {
    let card = document.createElement("div");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = item.name;
    let priceParagraph = document.createElement("p");
    priceParagraph.innerText = item.price;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-index", index);
    card.append(nameParagraph, priceParagraph, deleteButton);
    cartContainer.append(card);
  });
};

//REMOVES FROM CART WHEN YOU HIT DELETE
cartContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    total = 0;
    let ourIndex = e.target.getAttribute("data-index");
    cartArray.splice(ourIndex, 1);
    cartArray.forEach((product) => {
      let amount = product.price;
      total += amount;
      //total -= product.price
      totalParagraph.innerText = `Total: ${total}`;
    });
    displayInCart();
  }
});


