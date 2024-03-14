let cartItems = [];

const cartIcon = document.getElementById("counts");
// console.log(cartIcon);
const cartSection = document.querySelector(".cart__section");
// console.log(cartSection);
function upadateCartItems() {
  cartSection.innerHTML = "";
  cartItems.map((item) => {
    const cartProduct = document.createElement(`div`);
    cartProduct.classList.add("cartProduct");

    cartProduct.innerHTML = `
    <div class="cart-products">
    <img src=${item.image} width="50" />
    <h2>${item.name}</h2>
    <p>${item.price}</p>
    <div>
    <button class="decrement">-</button>
    <p>1</p>
    <button class="increment">+</button>
    </div>

    <p class="price"> ${item.price}</P>
    </div>
    
    `;
    cartSection.append(cartProduct);
  });

  const subtotalContainer = document.createElement("div");
  subtotalContainer.innerHTML = `
  <div class=subtotals-container>
    <p>Total Amount</p>
    <p class="subtotals"></p>
    </div>
  `;

  cartSection.append(subtotalContainer)

  updatePrices();
  updateSubtotals();
  // console.log(cartProduct);
}

cartIcon.addEventListener("click", function () {
  cartSection.classList.toggle("show__cart");
});
// add to cart
const cartCounter = document.getElementById("counter");
// console.log(cartCounter);
const cartButton = document.querySelectorAll(".button");
for (let i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener("click", function (e) {
    const pizzaname =
      e.target.parentElement.parentElement.children[1].children[0].textContent;
    const pizzaprice =
      e.target.parentElement.parentElement.children[1].children[2].textContent.replace(
        "Ksh.",
        ""
      );
    const pizzaimage =
      e.target.parentElement.parentElement.children[0].children[0].src;
    if (e.target.textContent.toLowerCase() === "add to cart") {
      cartCounter.textContent = Number(cartCounter.textContent) + 1;
      e.target.textContent = "remove from cart";
      e.target.style.background = "orange";

      let pizzaItem = {
        name: pizzaname,
        price: pizzaprice,
        image: pizzaimage,
      };

      // console.log(pizzaItem);
      console.log(e);
      cartItems.push(pizzaItem);
      console.log(cartItems);
      console.log(cartItems.length);
      // let cartSection=(cartProduct)
      // cartItems.map(function(cartProduct,index){
      // console.log(cartSection)
      // })
      // cartSection.map(cartProduct=>{
      upadateCartItems();
    } else {
      // cartCounter.textContent = Number(cartCounter.textContent) - 1;
      e.target.style.background = "black";
      e.target.textContent = "Add to Cart";
      const indexToRemove = cartItems.findIndex(
        (item) => item.name === pizzaname
      );
      cartItems.splice(indexToRemove, 1);
      counter.textContent = cartItems.length;
      upadateCartItems();
    }
  });
}

cartSection.addEventListener("click", function (e) {
  if (e.target.classList.contains("increment")) {
    // console.log("adding items")
    let currentQuantity = e.target.previousElementSibling;
    currentQuantity.textContent++;

    updatePrices();
    updateSubtotals();
  } else if (e.target.classList.contains("decrement")) {
    console.log("removing items");
    let currentQuantity = e.target.nextElementSibling;
    if (currentQuantity.textContent > 1) {
      currentQuantity.textContent--;
    }
  }
  updatePrices();
});
function updatePrices() {
  const cartItemProduct = document.querySelectorAll(".cartProduct");

  console.log(cartItemProduct);

  for (let i = 0; i < cartItemProduct.length; i++) {
    let product = cartItemProduct[i];
    const itemName = product.querySelector("h2");
    const itemPrice = parseInt(itemName.nextElementSibling.textContent);
    const itemQuantity = parseInt(
      itemName.nextElementSibling.nextElementSibling.children[1].textContent
    );

    const itemTotal = itemPrice * itemQuantity;
    const totals =
      itemName.nextElementSibling.nextElementSibling.nextElementSibling;
    totals.textContent = itemTotal;
    console.log(totals);

    // console.log(itemName);
  }
}

function updateSubtotals() {
  const cartItemPrices = document.querySelectorAll(".price");
  const subtotalPrice = document.querySelector(".subtotals")
  let subTotals = 0;
  for (let i = 0; i < cartItemPrices.length; i++) {
    subTotals += parseInt(cartItemPrices[i].textContent);
  }
subtotalPrice.textContent = subTotals
  console.log(subTotals);
}
