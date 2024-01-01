'use strict'

const showProduct = async (productId) => {

  const productContainer = document.querySelector('#product-container');

  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  console.log(product);

  let html = '';
  html += 
  `
  <img src="${product.thumbnail}" style="width:150px">
  <br><br>
  <div>${product.title}</div>
  <br>
  <div>USD$ ${product.price}</div>
  <br>
  <div>${product.description}</div>
  `
  productContainer.innerHTML = html;
}

// ----

// window.location.search = all the text in the url, right after the page name (something.html)
const queryString = window.location.search;
console.log(queryString);

// new URLSearchParams(queryString) = converts the above queryString to a special object that we can work with in the next line
const urlParams = new URLSearchParams(queryString);
console.log(urlParams)

// gets the value of a 'variable' from the URL
const productId = urlParams.get('id');
console.log(productId);

// ----

showProduct(productId);