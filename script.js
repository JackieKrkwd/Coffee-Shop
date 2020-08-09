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
let cartLink = document.querySelector(".cart-link");
let cash = document.querySelector(".cash");
let credit = document.querySelector(".credit");
let checkoutForm = document.querySelector(".checkout-form");
let formContainer = document.querySelector(".form-container");
let cashCheckout = document.querySelector(".cash-checkout-form");
let creditCheckout = document.querySelector(".credit-checkout-form");
let returnToMainPage = document.createElement("button");
let total = 0;

//ADD TO CART
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
    let tax = (0.06).toFixed(2) * total;
    totalParagraph.innerText = `Subtotal: $${total.toFixed(
      2
    )} Tax: $${tax.toFixed(2)} Total: $${total + tax}`;
    displayInCart();
    console.log("hello add");
    cartLink.innerText = `Cart (${cartArray.length})`;
  }
});

cartLink.addEventListener("click", () => {
  cartContainer.classList.remove("hide");
  formContainer.classList.remove("hide");
  cashCheckout.classList.add("hide");
  creditCheckout.classList.add("hide");
  checkoutForm.classList.remove("hide");
});

const display = () => {
  itemContainer.innerHTML = "";
  menuItems.forEach((item, index) => {
    let card = document.createElement("div");
    card.classList.add("menu-card");
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.classList.add("img");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = item.name;
    nameParagraph.classList.add("card-paragraph");
    let categoryParagraph = document.createElement("p");
    categoryParagraph.innerText = item.category;
    categoryParagraph.classList.add("card-paragraph");
    let descriptionParagraph = document.createElement("p");
    descriptionParagraph.innerText = item.description;
    descriptionParagraph.classList.add("card-paragraph");
    let priceParagraph = document.createElement("p");
    priceParagraph.innerText = `$${item.price.toFixed(2)}`;
    priceParagraph.classList.add("class", "card-paragraph");
    let addMenuItem = document.createElement("button");
    addMenuItem.classList.add("addToCart");
    addMenuItem.innerText = "Add to cart";
    addMenuItem.setAttribute("data-index", index);
    addMenuItem.classList.add("class", "menu-btn");
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
    card.classList.add("cart-border");
    let nameParagraph = document.createElement("p");
    nameParagraph.innerText = item.name;
    nameParagraph.classList.add("cart-text-styling");
    let priceParagraph = document.createElement("p");
    priceParagraph.innerText = `$${item.price.toFixed(2)}`;
    priceParagraph.classList.add("cart-text-styling");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove From Cart";
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-index", index);
    card.append(nameParagraph, priceParagraph, deleteButton);
    cartContainer.append(card);
  });
  let returnToMainPage = document.querySelector(".return-home");
  returnToMainPage.addEventListener("click", () => {
    formContainer.classList.add("hide");
    receiptContainer.classList.add("hide");
    totalParagraph.innerText = "";
    receiptContainer.innerHTML = "";
  });

  //CASH OR CREDIT SECTION
  cash.addEventListener("click", () => {
    cashCheckout.classList.remove("hide");
    checkoutForm.classList.add("hide");
  });
  credit.addEventListener("click", () => {
    creditCheckout.classList.remove("hide");
    checkoutForm.classList.add("hide");
  });
};

let receiptContainer = document.querySelector(".receipt");

//SUBMIT CHECKOUT TO RECEIPT
cashCheckout.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(cashCheckout);
  let amountTendered = data.get("amount-tendered");
  let changeAmountParagraph = document.createElement("p");
  changeAmountParagraph.classList.add("cart-text-styling");
  total = 0;
  cartArray.forEach((cartItem) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("cart-border");
    let cartItemName = document.createElement("p");
    cartItemName.innerText = cartItem.name;
    let cartItemPrice = document.createElement("p");
    cartItemPrice.innerText = cartItem.price;
    let amount = cartItem.price;
    total += amount;
    let cartItemImage = document.createElement("img");
    cartItemImage.setAttribute("src", cartItem.image);
    cartItemImage.classList.add("img");
    newDiv.append(cartItemImage, cartItemName, cartItemPrice);
    receiptContainer.append(newDiv);
    cartArray = [];
  });
  let tax = 0.06 * total;
  let ourTotalForReceipt = total + tax;
  let changeAmount = amountTendered - ourTotalForReceipt;
  changeAmountParagraph.innerText = `Change Due ${changeAmount.toFixed(2)}`;
  let returnToMainPage = document.createElement("button");
  returnToMainPage.innerText = "Return To Main Page";
  returnToMainPage.addEventListener("click", () => {
    formContainer.classList.add("hide");
    receiptContainer.classList.add("hide");
    cartContainer.innerHTML = "";
    totalParagraph.innerText = "";
    receiptContainer.innerHTML = "";
    cartLink.innerText = `Cart (${cartArray.length})`;
  });
  receiptContainer.append(changeAmountParagraph, returnToMainPage);
  cashCheckout.classList.add("hide");
  receiptContainer.classList.remove("hide");
});

creditCheckout.addEventListener("submit", (e) => {
  e.preventDefault();
  total = 0;
  cartArray.forEach((cartItem) => {
    let newDiv = document.createElement("div");
    let cartItemName = document.createElement("p");
    cartItemName.innerText = cartItem.name;
    let cartItemPrice = document.createElement("p");
    cartItemPrice.innerText = cartItem.price;
    let amount = cartItem.price;
    total += amount;
    let cartItemImage = document.createElement("img");
    cartItemImage.setAttribute("src", cartItem.image);
    cartItemImage.classList.add("img");
    newDiv.append(cartItemImage, cartItemName, cartItemPrice);
    receiptContainer.append(newDiv);
  });
  let tax = 0.06 * total;
  let ourTotalForReceipt = total + tax;
  let ourTotalParagraph = document.createElement("p");
  ourTotalParagraph.innerText = ourTotalForReceipt.toFixed(2);
  let returnToMainPage = document.createElement("button");
  returnToMainPage.innerText = "Return To Main Page";
  returnToMainPage.addEventListener("click", () => {
    formContainer.classList.add("hide");
    receiptContainer.classList.add("hide");
    cartContainer.innerHTML = "";
    totalParagraph.innerText = "";
    receiptContainer.innerHTML = "";
    cartArray = [];
  });
  receiptContainer.append(ourTotalParagraph, returnToMainPage);
  creditCheckout.classList.add("hide");
  receiptContainer.classList.remove("hide");
});

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
    totalParagraph.innerText = `Subtotal: ${total} Tax: ${tax.toFixed(
      2
    )} Total: ${total + tax}`;
    cartLink.innerText = `Cart (${cartArray.length})`;
    displayInCart();
  }
});
