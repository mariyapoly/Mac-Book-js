// get cost funtion
function getCost(costId, costValue) {
    const totalCost = document.getElementById(costId);
    totalCost.innerText = costValue;
    updateTotalPrice();
}
// set memory button event handler
document.getElementById('memory-button').addEventListener('click', function () {
    getCost('memory-cost', 0);
})
// set memory button-2 event handler
document.getElementById('memory-button-2').addEventListener('click', function () {
    getCost('memory-cost', 180);
})
// set storage button event handler
document.getElementById('storage-button').addEventListener('click', function () {
    getCost('storage-cost', 0);
})
// set storage button-2 event handler
document.getElementById('storage-button-2').addEventListener('click', function () {
    getCost('storage-cost', 100);
})
// set storage button-3 event handler
document.getElementById('storage-button-3').addEventListener('click', function () {
    getCost('storage-cost', 180);
})
// set delivery button event handler
document.getElementById('delivery-button').addEventListener('click', function () {
    getCost('delivery-charge', 0);
})
// set delivery button-2 event handler
document.getElementById('delivery-button-2').addEventListener('click', function () {
    getCost('delivery-charge', 20);
})

// get price funtion
function getPrice(priceId) {
    const Price = document.getElementById(priceId);
    const PriceValue = parseFloat(Price.innerText);
    return PriceValue;
}
// get update total price funtion
function updateTotalPrice() {

    const price = getPrice('best-price');
    const memory = getPrice('memory-cost');
    const storage = getPrice('storage-cost');
    const delivery = getPrice('delivery-charge');

    document.getElementById('total-price').innerText = price + memory + storage + delivery;
    document.getElementById('total').innerText = price + memory + storage + delivery;
}

document.getElementById('apply-button').addEventListener('click', function () {
    const applyField = document.getElementById('input-field');
    const inputValue = applyField.value

    const total = document.getElementById('total');
    let totalValue = total.innerText

    if (inputValue == 'stevenkaku') {
        const totalVal = totalValue / 100 * 20;
        total.innerText = totalValue - totalVal;
        applyField.value = ' ';
    }
})
