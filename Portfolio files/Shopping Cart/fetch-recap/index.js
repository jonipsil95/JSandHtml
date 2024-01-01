'use strict'
/*
document.addEventListener(
  'DOMContentLoaded',
  () => { getProducts('https://dummyjson.com/products')
})
*/
// DOM References
const productsContainer = document.querySelector('#products-container');
const fetchButton = document.querySelector('#fetch-button');
const fetchSmartphonesButton = document.querySelector('#fetch-smartphones-only');
const fetchLaptopsButton = document.querySelector('#fetch-laptops-only');
const elmCartContainer = document.querySelector('#cart-container');

// DRY = Don't Repeat Yourself

/*
const getAllProducts = async () => {
  //console.log('fetching..')
  const response = await fetch('https://dummyjson.com/products');
  //console.log('fetching done..')
  const data = await response.json();
  const products = data.products;
  console.log(products);

  let html = '<ul>';
  for (let i=0; i<products.length; i++) {
    html += `<li id="li-number-${products[i].id}">${products[i].title}</li>`
  }
  html += '</ul>';

  productsContainer.innerHTML = html;
}

const getSmartphonesOnly = async () => {
  const response = await fetch('https://dummyjson.com/products/category/smartphones');
  const data = await response.json();
  const products = data.products;
  console.log(products);

  let html = '<ul>';
  for (let i=0; i<products.length; i++) {
    html += `<li id="li-number-${products[i].id}">${products[i].title}</li>`
  }
  html += '</ul>';

  productsContainer.innerHTML = html;
}
*/

// ---------------------

/*
const getProducts = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const products = data.products;
    console.log(products);
  
  // ------

    let html = '<ul>';
    for (let i=0; i<products.length; i++) {
      html += `<li id="li-number-${products[i].id}">${products[i].title}</li>`
    }
    html += '</ul>';
  
    productsContainer.innerHTML = html;
}
*/

// ---------------------

const fetchAndDisplayProducts = async (url) => {
  const products = await fetchProducts(url);
  displayProducts(products);
}

const fetchProducts = async (url) => {
  // fetch products
  const response = await fetch(url);
  const data = await response.json();
  const products = data.products;
  return products;
}

const displayProducts = (products) => {
  // display products
  let html = '<ul>';
  for (let i=0; i<products.length; i++) {
    // html += `<li onclick="openProductPage(${products[i].id})" id="li-number-${products[i].id}">${products[i].title}</li>`
    html += 
    `
    <li>
      <span onclick="openProductPage(${products[i].id})">${products[i].title} !!! </span>
      <span onclick="addToCart('${products[i].title}')">[Add to cart]</span>
     </li>
    `
  }
  html += '</ul>';

  productsContainer.innerHTML = html;
}

// -----------------------------------------------------------
/* let productTitle; */



let cart = [];

function addToCart(productTitle) {
  window.localStorage.setItem('cart',JSON.parse(cart));
 /*  cart.push(productTitle) */
  renderCart()
  
   
  
}

function removeFromCart(productTitle) {
   window.localStorage.removeItem('cart',cart)
  cart = cart.filter(item => item !== productTitle)
  renderCart()
}

function renderCart() {
  
  if (cart.length === 0) { 
    elmCartContainer.innerHTML = 'Your cart is empty !';
  }

  function loadCartFromLS() {
 // load cart from ls
 const carString = window.localStorage.getItem('cart')
if (carString){
  cart = carString.split(",");
   JSON.parse(productTitle)

}




 renderCart()
  } 
 
  loadCartFromLS();

  let html = '<ul>'
  for (let i=0; i<cart.length; i++) {
    html += 
    `
    <li>
      <span>${cart[i]}</span>
      <span onclick="removeFromCart('${cart[i]}')">[X]</span>
    </li>
    `
  }
  html += '</ul>'
  elmCartContainer.innerHTML = html;

}
 

/*
addToCart('Macbook Pro');
addToCart('HP Pavilion');
addToCart('Dell Vostro');

removeFromCart('Macbook Pro');

renderCart();
*/

// -----------------------------------------------------------

const showProduct = async (productId) => {
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  console.log(product);

  let html = '';
  html += 
  `
  <img src="${product.thumbnail}" style="width:150px">
  <div>${product.title}</div>
  <div>USD$ ${product.price}</div>
  `
  productsContainer.innerHTML = html;
}

const openProductPage = (productId) => {
  window.open(`product.html?id=${productId}`);
}

// Event listeners
fetchButton.addEventListener('click', () => fetchAndDisplayProducts('https://dummyjson.com/products') );
fetchSmartphonesButton.addEventListener('click', () => fetchAndDisplayProducts('https://dummyjson.com/products/category/smartphones') );
fetchLaptopsButton.addEventListener('click', () => fetchAndDisplayProducts('https://dummyjson.com/products/category/laptops') );

// -----------------------------------------------------------------------

// URL to fetch an array of categories (strings)
// https://dummyjson.com/products/categories

const handleCategoryChange = () => {
  const elmCateogiesDropdown = document.querySelector('#categories')
  const categoryName = elmCateogiesDropdown.value
  fetchAndDisplayProducts(`https://dummyjson.com/products/category/${categoryName}`)
}

const elmCategoriesContainer = document.querySelector('#categories-container');

const fetchCategories = async () => {
  const response = await fetch('https://dummyjson.com/products/categories')
  const categories = await response.json()

  /*
  let html = '<ul>';
  for (let i=0; i<categories.length; i++) {
    html += `<li onclick="fetchAndDisplayProducts('https://dummyjson.com/products/category/${categories[i]}')">${categories[i]}</li>`
  }
  html += '</ul>';
  */

  let html = '<label for="categories">Choose a category:</label>';
  html += `<select name="categories" id="categories" onchange="handleCategoryChange()">`
  for (let i=0; i<categories.length; i++) {
    html += `<option value="${categories[i]}">${categories[i]}</option>`
  }
  html += '</select>';
  
  elmCategoriesContainer.innerHTML = html;
}

fetchCategories()

// ----------------------------------------------------

const elmSearchBox = document.querySelector('#search-box');

const showValue = () => {
  console.log(elmSearchBox.value);
}



// -----------------------------------------------------

// 1. add button ('add to cart') to <li>'s
// 2. add onclick that triggers function 'addToCart("product-name-as-param")'
// 3. function adds product-title to js array 'cart'
// 4. function triggers renderCart
// 5. 'renderCart' reflects the array to dom
// 6. Mashal