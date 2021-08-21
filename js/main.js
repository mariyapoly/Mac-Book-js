// Declaring ProductCost function
function ProductCost(productCostId, productCostValue) {
    const productTotalCost = document.getElementById(productCostId);
    productTotalCost.innerText = productCostValue;
    // Call the function updateTotalPrice 
    updateTotalPrice();
}
// set memory button event handler
document.getElementById('memory-button').addEventListener('click', function () {
    ProductCost('memory-cost', 0);
})
// set memory button-2 event handler
document.getElementById('memory-button-2').addEventListener('click', function () {
    ProductCost('memory-cost', 180);
})
// set storage button event handler
document.getElementById('storage-button').addEventListener('click', function () {
    ProductCost('storage-cost', 0);
})
// set storage button-2 event handler
document.getElementById('storage-button-2').addEventListener('click', function () {
    ProductCost('storage-cost', 100);
})
// set storage button-3 event handler
document.getElementById('storage-button-3').addEventListener('click', function () {
    ProductCost('storage-cost', 180);
})
// set delivery button event handler
document.getElementById('delivery-button').addEventListener('click', function () {
    ProductCost('delivery-charge', 0);
})
// set delivery button-2 event handler
document.getElementById('delivery-button-2').addEventListener('click', function () {
    ProductCost('delivery-charge', 20);
})
// Declaring ProductPrice function
function ProductPrice(productPriceId) {
    const productId = document.getElementById(productPriceId);
    const productPriceValue = parseFloat(productId.innerText);
    return productPriceValue;
}
// Declaring updateTotalPrice function
function updateTotalPrice() {
    // set best price value
    const bestPrice = ProductPrice('best-price');
    // set memory cost value
    const memoryCost = ProductPrice('memory-cost');
    // set storage cost value
    const storageCost = ProductPrice('storage-cost');
    // set delivery charge value
    const deliveryCharge = ProductPrice('delivery-charge');
    // update total price value
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = bestPrice + memoryCost + storageCost + deliveryCharge;
    // update total amound value
    document.getElementById('total').innerText = totalPrice.innerText;
}
// set apply button event handler
document.getElementById('apply-button').addEventListener('click', function () {
    // set input field value
    const applyField = document.getElementById('input-field');
    const inputValue = applyField.value
    // set discount total amound value
    const total = document.getElementById('total');
    const totalValue = total.innerText;
    // set input condition and update discount total amound
    if (inputValue == 'stevekaku') {
        const discountTotalValue = totalValue - (totalValue * 20) / 100;
        total.innerText = discountTotalValue;
        applyField.value = '';
    }
})
