// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(function($mush){
    if (state.mushrooms) {
      $mush.style.visibility = "visible";
    }
    else {
      $mush.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function($green){
    if (state.greenPeppers) {
      $green.style.visibility = "visible";
    }
    else {
      $green.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce.sauce-white');
  // sauce.setAttribute("class", "sauce");
  
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`


}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let $buttons = document.querySelectorAll(".btn");

  for(let i= 0; i < $buttons.length; i++){
    for(const ingredientsKey in ingredients){
      if (ingredients[ingredientsKey].name === $buttons[i].innerHTML){
        if(state[ingredientsKey]){
          $buttons[i].classList.add("active");
        } else {
          $buttons[i].classList.remove("active");
        }
        break; // after founding the ingredient the loop doesn't need to keep going
      }
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let $asidePanel = document.querySelector(".panel.price");

  let $ulPrices = $asidePanel.querySelector("ul");
  $ulPrices.innerHTML = "";
  let totalPrice = basePrice;
  for(const ingredient in state){
    if(state[ingredient]){
      totalPrice += ingredients[ingredient].price;
      let $li = document.createElement("li");
      $li.innerHTML = `$${ingredients[ingredient].price} ${ingredients[ingredient].name}`;
      $ulPrices.appendChild($li);
    }
  }
  $asidePanel.querySelector("strong").innerHTML= `$ ${totalPrice}`;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}


// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}


/*// Write your Pizza Builder JavaScript in this file.
// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};
// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};
// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}
function renderPepperoni() {
  document.querySelectorAll('.pep').forEach($pep => {
    if (state.pepperoni) {
      $pep.style.visibility = 'visible';
    } else {
      $pep.style.visibility = 'hidden';
    }
  });
}
function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
}
function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
}
function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
}
function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}
function renderButtons() {
  Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let $buttons = document.querySelectorAll(".btn  ");
  for(let i =0; i < $buttons.length; i++){
    for(const ingredientKey in ingredients){
      if(ingredients[ingredientKey].name === $buttons[i].innerHTML){
        if(state[ingredientKey]){
          $buttons[i].classList.add("active");
        } else {
          $buttons[i].classList.remove("active");
        }
        break;
      } 
    }
  }
}
function renderPrice() {
  let $asidePanel = document.querySelector(".panel.price");
  let $ulPrices = $asidePanel.querySelector("ul");
  $ulPrices.innerHTML = "";
  let totalPrice = basePrice;
  for(const ingredient in state){
    if(state[ingredient]) {
      let ingredientPrice = ingredients[ingredient].price;
      totalPrice += ingredientPrice;
      let $li = document.createElement("li");
      $li.innerHTML = `$${ingredientPrice} ${ingredients[ingredient].name}`;
      $ulPrices.appendChild($li);
    }
  }
  $asidePanel.querySelector("strong").innerHTML = "$" + totalPrice;
}
renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').onclick = () => {
  event.currentTarget.classList.toggle("active");
  state.pepperoni = !state.pepperoni;
  renderEverything();
};
document.querySelector('.btn.btn-mushrooms').onclick = () => {
  event.currentTarget.classList.toggle("active");
  state.mushrooms = !state.mushrooms;
  renderEverything();
};
document.querySelector('.btn.btn-green-peppers').onclick = () => {
  event.currentTarget.classList.toggle("active");
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};
document.querySelector('.btn.btn-sauce').onclick = () => {
  event.currentTarget.classList.toggle("active");
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};
document.querySelector('.btn.btn-crust').onclick = (event) => {
  debugger
  event.currentTarget.classList.toggle("active");
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
}; */
