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
    card.append(
      nameParagraph,
      categoryParagraph,
      descriptionParagraph,
      priceParagraph
    );
    itemContainer.append(card);
  });
};
display();
