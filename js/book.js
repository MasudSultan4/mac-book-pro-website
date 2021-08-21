// count memory 
const countMemorey = document.getElementById('const-memory');


// paid memory 
document.getElementById('paid-memory').addEventListener('click',function(){
    countMemorey.innerText = '180'
    updateTotal();
})

// free memory 
document.getElementById('free-memory').addEventListener('click',function(){
    countMemorey.innerText = '0'
    updateTotal();
})

// count ssd 1tb
const countSsd = document.getElementById('count-ssd')

// free SSD 
document.getElementById('free-ssd').addEventListener('click',function(){
    countSsd.innerText = '0';
    updateTotal();
})

// paid SSD 
document.getElementById('paid-ssd').addEventListener('click',function(){
    countSsd.innerText = '100';
    updateTotal();
})

// paid 1tb 
document.getElementById('paid-1tb').addEventListener('click',function(){
    countSsd.innerText = '180'
    updateTotal();
})


// count Delivary 
const countDelivary = document.getElementById('count-delivary');

document.getElementById('free-delivary').addEventListener('click',function(){
    countDelivary.innerText = '0';
    updateTotal();
});

document.getElementById('paid-delivary').addEventListener('click',function(){
    countDelivary.innerText = '20'
    updateTotal();
})
// product Price
const productPrice = document.getElementById('product-price');
// total price 
const totalPrice = document.getElementById('total-price');

// total Product coust 
function updateTotal() {
    const macPrice = parseFloat(productPrice.innerText)
    const memory = parseFloat(countMemorey.innerText);
    const ssd = parseFloat(countSsd.innerText);
    const delivary = parseFloat(countDelivary.innerText);

    const grandTotal = macPrice + memory + ssd + delivary;
    totalPrice.innerText = grandTotal;
    // soldOut()
}

// soldout-price 
const soldoutPrice = document.getElementById('soldout-price');

// soldOut Coust function 
function soldOut() {
 
      
}





