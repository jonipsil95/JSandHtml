// Function to fetch and display products
const getProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/category/smartphones');
    const data = await response.json();

    // Call the displayProducts function with the products data
    displayProducts(data.products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
  }
};

// Function to display products
const displayProducts = (products) => {
  const productListContainer = document.getElementById('productList');

  // Clear any existing content
  productListContainer.innerHTML = '';

  // Create a list to display the products
  const productList = document.createElement('ul');

  // Iterate through the products and create list items
  products.forEach(product => {
    const listItem = document.createElement('li');

    // Create a <p> element for the product details
    const productDetails = document.createElement('p');
    productDetails.textContent = `ID: ${product.id}, Title: ${product.title}, Price: ${product.price}$`;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      // Call the removeProduct function with the product id
      removeProduct(product.id);
    });

    // Append the product details and delete button to the list item
    listItem.appendChild(productDetails);
    listItem.appendChild(deleteButton);

    // Set a data-id attribute to the list item
    listItem.setAttribute('data-id', product.id);

    // Append the list item to the product list
    productList.appendChild(listItem);
  });

  // Append the list to the container
  productListContainer.appendChild(productList);
};

// Function to remove a product based on its id
const removeProduct = (productId) => {
  // Remove the product from the displayed list
  const productListContainer = document.getElementById('productList');
  const productList = productListContainer.querySelector('ul');
  const listItemToRemove = productList.querySelector(`[data-id="${productId}"]`);

  if (listItemToRemove) {
    productList.removeChild(listItemToRemove);
  } else {
    console.error('Product not found in the list.');
  }
};

// Call the getProducts function to fetch and display products

/* const addProduct = async () => {
  try {
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;

    // Make a POST request to the server endpoint to add a new product
    const response = await fetch('https://dummyjson.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, price }),
    });

    if (!response.ok) {
      throw new Error('Failed to add the product.');
    }

    // After successful addition, fetch and display updated products
    getProducts();
  } catch (error) {
    console.error('Error adding the product:', error.message);
  }
};

// Function to update a product
const updateProduct = async () => {
  try {
    const updateId = document.getElementById('updateId').value;
    const updateTitle = document.getElementById('updateTitle').value;
    const updatePrice = document.getElementById('updatePrice').value;

    // Make a PUT request to the server endpoint to update the product
    const response = await fetch(`https://dummyjson.com/products/${updateId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: updateTitle, price: updatePrice }),
    });

    if (!response.ok) {
      throw new Error('Failed to update the product.');
    }

    // After successful update, fetch and display updated products
    getProducts();
  } catch (error) {
    console.error('Error updating the product:', error.message);
  }
}; */


// Function to add a new product (simulated)
const addProduct = () => {
  try {
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;

    // Generate a unique ID for the product
    const productId = Date.now();

    // Simulate adding the product by updating the UI
    const product = { id: productId, title, price };
    const productListContainer = document.getElementById('productList');
    const productList = productListContainer.querySelector('ul');
    const listItem = document.createElement('li');
    
    const productDetails = document.createElement('p');
    productDetails.textContent = `Product ID: ${productId}, Title: ${product.title}, Price: ${product.price}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      removeProduct(productId);
    });

    listItem.appendChild(productDetails);
    listItem.appendChild(deleteButton);
    listItem.setAttribute('data-id', productId);

    productList.appendChild(listItem);
  } catch (error) {
    console.error('Error adding the product:', error.message);
  }
};


// Function to update a product (simulated)
const updateProduct = () => {
  try {
    const updateId = document.getElementById('updateId').value;
    const updateTitle = document.getElementById('updateTitle').value;
    const updatePrice = document.getElementById('updatePrice').value;

    // Simulate updating the product by storing the data in local storage
    const updatedProduct = {
      id: updateId,
      title: updateTitle,
      price: updatePrice
    };

    // Retrieve the existing products from local storage
    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];

    // Find the index of the product to update
    const indexToUpdate = existingProducts.findIndex(product => product.id === updateId);

    if (indexToUpdate !== -1) {
      // Update the product in the array
      existingProducts[indexToUpdate] = updatedProduct;

      // Save the updated products back to local storage
      localStorage.setItem('products', JSON.stringify(existingProducts));

      // Update the UI (you can modify this part based on your UI structure)
      const productListContainer = document.getElementById('productList');
      const productList = productListContainer.querySelector('ul');
      const listItemToUpdate = productList.querySelector(`[data-id="${updateId}"]`);

      if (listItemToUpdate) {
        const productDetails = listItemToUpdate.querySelector('p');
        productDetails.textContent = `Product ID: ${updateId}, Title: ${updateTitle}, Price: ${updatePrice}`;
      } else {
        console.error('Product not found in the list.');
      }
    } else {
      console.error('Product not found in local storage.');
    }
  } catch (error) {
    console.error('Error updating the product:', error.message);
  }
};


getProducts();