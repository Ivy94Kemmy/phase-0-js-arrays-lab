const products = ["Laptop", "phone", "Tablet", "Headphones", "Smartwatch"];

function logFirstProduct(products) {
console.log(products);
}
function addProduct(productName) {
products.push(productName);
}
function updateProductName(position, newName) {
products[position] = newName;
}
function removeLastProduct() {
products.pop();
}
logFirstProduct(products);

addProduct("Camera");

updateProductName(1, "Smartphone");

removeLastProduct();

console.log(products);



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
