

/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/
/*eslint-disable no-unused-vars*/


var hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', function(e) {
    var ul = document.querySelector('nav > ul');
    ul.classList.toggle('menu-slide');
    hamburger.classList.toggle('cross');
});



var nav = document.querySelector('nav');
window.addEventListener('scroll', function() {
var offset = window.pageYOffset;

if (offset > 0 ) {
nav.classList.add("scroll")
} else {
    nav.classList.remove('scroll')
}
});





/* alle koopknoppen opzoeken in de HTML */
/* omdat er meer buttons geselecteerd moeten worden, wordt querySelectorAll gebruikt (en niet querySelector) */
/* het gevonden lijstje met koopknoppen (een array) in de variabele 'addToCartButtons' opslaan */
var addToCartButtons = document.querySelectorAll("button.shop");

/* elke koopknop laten luisteren naar een klik */
/* na een klik de functie 'updateShoppingCart' uitvoeren */
for (i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", updateShoppingCart);
}

/* als er op een koopknop is gedrukt - het winkelwagentje updaten */
function updateShoppingCart() {
  /* het getal (de span) in de winkelwagen-link in de nav opzoeken */
  /* die span in de variabele 'shoppingCartAmount' opslaan */
  let shoppingCartAmount = document.querySelector(".shopping-cart span");

  /* het huidige aantal schoenen in  de shopping cart bepalen */
  let currentAmount = shoppingCartAmount.innerHTML;
  /* dat is een string - dus even omzetten naar een getal */
  currentAmount = parseInt(currentAmount);

  /* het nieuwe aantal schoenen berekenen */
  let newAmount = currentAmount + 1;

  /* het rode bolletje is niet zichtbaar als het aantal 0 is */
  /* als het nieuwe aantal schoenen 1 wordt */
  if (newAmount == 1) {
    /* dan moet het rode bolletje zichtbaar worden */
    /* dit doen door een klas aan de span toe te voegen */
    /* dan met css zorgan dat het bolletje zichtbaar wordt */
    shoppingCartAmount.classList.add("positive");
  }

  /* tenslotte het nieuwe aantal schoenen in de HTML zetten */
  shoppingCartAmount.innerHTML = newAmount;
}

