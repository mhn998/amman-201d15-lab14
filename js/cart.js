/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let tbody;
let cartItems;
let tdX;
let tr;
function loadCart() {
  cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
  console.log(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // tr.remove();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  tbody = document.querySelector('tbody');


  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i =0;i<cart.items.length;i++) {
    console.log("fub");
    tr = document.createElement('tr');
    tdX = document.createElement('td');
    // tdX.setAttribute("type", "click")
    let tdQ = document.createElement('td');
    let tdItem = document.createElement('td');
    tbody.appendChild(tr);
    tr.appendChild(tdX);
    tr.appendChild(tdQ);
    tr.appendChild(tdItem);
    // cart.items[i].addItem(cart.items[i].product,cart.items[i].quantity);
    tdX.textContent = "X";
    tdItem.textContent = cartItems[i].product;
    tdQ.textContent = cartItems[i].quantity;
  }

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  console.log(event.target)
  cartItems.removeItem(event.target)
  
}

// This will initialize the page and draw the cart on screen
renderCart();