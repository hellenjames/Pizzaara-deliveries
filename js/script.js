let selectItems = document.querySelectorAll(".select");
let pizzaItems = document.querySelectorAll(".menu__items");
console.log(selectItems);
console.log(pizzaItems);
for (let i = 0; i < selectItems.length; i++) {
  if (selectItems[i].textContent === "Chicken Pizza")
    selectItems[i].classList.add("active");
  // console.log(selectItems[i])
  console.log(selectItems[i]);
  //    }
}

for (let i = 0; i < pizzaItems.length; i++) {
  let pizza = pizzaItems[i];
  console.log(pizza);
  if (pizza.classList.contains("chicken")) {
    pizza.style.display = "flex";
  } else {
    pizza.style.display = "none";
  }
}
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].classList.remove("active");
    }
    selectItems[i].classList.add("active");

    let filterName = selectItems[i].textContent;
    console.log(filterName);
    if (filterName.toLowerCase() === "chicken pizza") {
      for (let i = 0; i < pizzaItems.length; i++) {
        if (pizzaItems[i].classList.contains("chicken"))
          pizzaItems[i].style.display = "flex";
        else {
          pizzaItems[i].style.display = "none";
        }
      }
    } else if (filterName.toLowerCase() === "pepperoni") {
      for (let i = 0; i < pizzaItems.length; i++) {
        if (pizzaItems[i].classList.contains("pepperoni"))
          pizzaItems[i].style.display = "flex";
        else {
          pizzaItems[i].style.display = "none";
        }
      }
    } else if (filterName.toLowerCase() === "margherita") {
      for (let i = 0; i < pizzaItems.length; i++) {
        if (pizzaItems[i].classList.contains("margherita"))
          pizzaItems[i].style.display = "flex";
        else {
          pizzaItems[i].style.display = "none";
        }
      }
    } else if (filterName.toLowerCase() === "hawaiian") {
      for (let i = 0; i < pizzaItems.length; i++) {
        if (pizzaItems[i].classList.contains("hawaiian"))
          pizzaItems[i].style.display = "flex";
        else {
          pizzaItems[i].style.display = "none";
        }
      }
    } else if (filterName.toLowerCase() === "meat lover’s pizza") {
      for (let i = 0; i < pizzaItems.length; i++) {
        if (pizzaItems[i].classList.contains("meat"))
          pizzaItems[i].style.display = "flex";
        else {
          pizzaItems[i].style.display = "none";
        }
      }
    }
  });
}
console.log(selectItems);

//    add to cart
// let value = document.getElementById("cart");
// const cartCounter = document.getElementById("counter");
// console.log(cartCounter);
// // const menu__items = document.getElementById("select");
// const cartButton = document.querySelectorAll(".button");
// for (let i = 0; i < cartButton.length; i++) {
//   cartButton[i].addEventListener("click", function (e) {
//     if (e.target.textContent.toLowerCase() === "add to cart") {
//       cartCounter.textContent = Number(cartCounter.textContent) + 1;
//       e.target.textContent = "remove from cart";
//       e.target.style.background = "orange";
//     } else {
//       cartCounter.textContent = Number(cartCounter.textContent)- 1;
//       e.target.style.background = "black";
//       e.target.textContent = "Add to Cart";
//     }
//   });
// }

// document.addEventListener("DOMContentLoaded", function (){
// })

// cart.map(function(pizzaItems,index)){
//     console.log(cart)
// }

