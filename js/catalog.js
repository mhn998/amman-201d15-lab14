/* global Product, Cart */

'use strict';
let x; 
let y;
let selectedQ;
let cartext = document.getElementById("cartContents");
// Set up an empty cart for use on this page.
const cart = new Cart([]);
// console.log(cart);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
const selectElement = document.getElementById('items');
const quantityElement = document.getElementById('quantity')
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  let option1st = document.createElement("option");
  selectElement.appendChild(option1st);
  option1st.setAttribute("disabled", "" )
  option1st.setAttribute("selected", "" )
  option1st.textContent = "Select your option"
  for (let i in Product.allProducts) { 
    let option = document.createElement('option');
    selectElement.appendChild(option);
    option.setAttribute("value",'');
    option.textContent = Product.allProducts[i].name;


  }

}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.

function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  addAnimation();
  updateCartPreview();
  catalogForm.reset();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart(event) {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the CartS
  x = selectElement.selectedIndex
  y = selectElement.options
  quantityElement.setAttribute("value", "")
  selectedQ = quantityElement.value;
  cart.addItem(y[x].text,selectedQ)

  
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let counter = document.getElementById("itemCount")
  counter.textContent = cart.items.length;
}


function addAnimation() {
  let message;
  if (selectedQ && y[x].index !== 0) {
    message = document.createElement('section');
    cartext.appendChild(message);
    message.textContent = "You Added new items to the cart! "
  }

}

let initial = true;
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {

  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information

  let header =document.createElement('article');
  
  if (selectedQ == "" || y[x].index == 0) {
    alert("please fill all fields with proper values")
  } else if (initial) {
    let btn = document.createElement('button')
    cartext.appendChild(btn);
    let link = document.createElement('a');
    btn.appendChild(link);
    link.setAttribute("href", "cart.html")
    link.textContent = "Check your cart"
    cartext.appendChild(header);
    let headings1 = document.createElement('h2');
    let headings2 = document.createElement('h2');
    header.appendChild(headings1);
    header.appendChild(headings2)
    headings1.textContent = "Items";
    headings2.textContent = "Quantity";
    initial = false;   
    let ordereditems = document.createElement("p")
    let orderedQ = document.createElement("p");
    header.appendChild(ordereditems);
    header.appendChild(orderedQ)
    // let retrieved = localStorage.getItem(JSON.parse(cart.items))
    ordereditems.textContent =y[x].text;
    orderedQ.textContent = selectedQ; 

  } else {
    cartext.appendChild(header);
    let ordereditems = document.createElement("p")
    let orderedQ = document.createElement("p");
    header.appendChild(ordereditems);
    header.appendChild(orderedQ)
    ordereditems.textContent = y[x].text;
    orderedQ.textContent = selectedQ; 

  }
  
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
