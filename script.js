"use strict";

let menuItems = [
  {
    image: "images/Coffee.jpg",
    name: "Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2,
  },
  {
    image: "images/cappuccino.jpg",
    name: "Cappuccino",
    category: "drink",
    description: "brown liquid",
    price: 3,
  },
  {
    image: "images/Espresso.jpg",
    name: "Espresso",
    category: "drink",
    description: "brown liquid",
    price: 3.5,
  },
  {
    image: "images/Latte.jpg",
    name: "Latte",
    category: "drink",
    description: "brown liquid",
    price: 4,
  },
  {
    image: "images/Iced Coffee.jpg",
    name: "Iced Coffee",
    category: "drink",
    description: "brown liquid",
    price: 2.5,
  },
  {
    image: "images/nitro.jpg",
    name: "Nitro Coffee",
    category: "drink",
    description: "brown liquid",
    price: 4,
  },
  {
    image: "images/Cookie.jpg",
    name: "Cookie",
    category: "food",
    description: "brown food",
    price: 1,
  },
  {
    image: "images/muffin.jpg",
    name: "Muffin",
    category: "food",
    description: "brown food",
    price: 2,
  },
  {
    image: "images/croissant.jpg",
    name: "Croissant",
    category: "food",
    description: "brown food",
    price: 2.5,
  },
  {
    image: "images/doughnut.jpg",
    name: "Doughnut",
    category: "food",
    description: "brown food",
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
    });
    let tax = 0.06 * total;
    totalParagraph.innerText = `Subtotal: ${total} Tax: ${tax} Total: ${
      total + tax
    }`;
    displayInCart();
  }
});

const display = () => {
  itemContainer.innerHTML = "";
  menuItems.forEach((item, index) => {
    let card = document.createElement("div");
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.classList.add("img");
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
      image,
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
  let checkoutButton = document.createElement("button");
  checkoutButton.innerText = "Checkout";
  checkoutButton.classList.add("checkout");
  cartContainer.append(checkoutButton);
  let formContainer = document.querySelector(".form-container");
  checkoutButton.addEventListener("click", () => {
    formContainer.classList.remove("hide");
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
    });
    let tax = 0.06 * total;
    totalParagraph.innerText = `Subtotal: ${total} Tax: ${tax} Total: ${
      total + tax
    }`;
    displayInCart();
  }
});
