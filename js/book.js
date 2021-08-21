
// free count product 
function freeCountProduct(free,freeProductId,price) {
    const freeProduct = document.getElementById(free);
    document.getElementById(freeProductId).addEventListener('click',function(){
        freeProduct.innerText = price
        updateText();
         
    })
}

// free memory 
freeCountProduct('const-memory','free-memory',0);

// free delivary 
freeCountProduct('count-delivary','free-delivary',0);

// free SSD 
freeCountProduct('count-ssd','free-ssd',0)


// count ssd 1tb
const countSsd = document.getElementById('count-ssd')




// count memory 
const countMemorey = document.getElementById('const-memory');

// paid memory 
document.getElementById('paid-memory').addEventListener('click',function(){
    countMemorey.innerText = '180'
    updateText();
})

// paid SSD 
document.getElementById('paid-ssd').addEventListener('click',function(){
    countSsd.innerText = '100';
    updateText();
})

// paid 1tb 
document.getElementById('paid-1tb').addEventListener('click',function(){
    countSsd.innerText = '180'
    updateText();
})

// count Delivary 
const countDelivary = document.getElementById('count-delivary');

document.getElementById('paid-delivary').addEventListener('click',function(){
    countDelivary.innerText = '20'
    updateText();
})

// product Price
const productPrice = document.getElementById('product-price');
// total price 
const totalPrice = document.getElementById('total-price');

// total Product coust 
function updateText() {
    const macPrice = parseFloat(productPrice.innerText)
    const memory = parseFloat(countMemorey.innerText);
    const ssd = parseFloat(countSsd.innerText);
    const delivary = parseFloat(countDelivary.innerText);

    const grandTotal = macPrice + memory + ssd + delivary;
    totalPrice.innerText = grandTotal;
    soldOutPrice() 
 
}



const soldoutPrice = document.getElementById('soldout-price');

// soldOut Coust function 
function soldOutPrice() {
    const macPrice = parseFloat(productPrice.innerText)
    const memory = parseFloat(countMemorey.innerText);
    const ssd = parseFloat(countSsd.innerText);
    const delivary = parseFloat(countDelivary.innerText);

    const grandTotal = macPrice + memory + ssd + delivary;
    soldoutPrice.innerText = grandTotal;

 return soldoutPrice.innerText;
}



// discount Input 
const discountInput = document.getElementById('discount-input');
let finullTotal = document.getElementById('soldout-price');



document.getElementById('apply-btn').addEventListener('click',function (){
    
    if(discountInput.value.toLowerCase() == 'stevekaku'){
       let discount = finullTotal.innerText * (20/100);
       let discountTotal = document.getElementById('total-discount');
       discountTotal.innerText = discount;

       let finnel = finullTotal.innerText -discount
       finullTotal.innerText = finnel;
    }
    
    discountInput.value = ''
  
})
