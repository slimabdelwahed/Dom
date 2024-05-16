/**document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".card");

    products.forEach(product => {



const plusButton = document.querySelectorAll('.fa-plus-circle');
const minusButton = document.querySelectorAll('.fa-minus-circle');
const quantityElement = document.querySelectorALL('.quantity');
var produit=document.querySelectorAll('.card');
const unitPriceElement=document.querySelector('.unit-price');
let quantity = 0;
let price=0;
plusButton.addEventListener('click', function ()  {
    quantity++; 
    price*2; 
    quantityElement.textContent = quantity;
    unitPriceElement.textContent=price;
});
minusButton.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
    }
});
 })});**/   


 /**document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".card");

    products.forEach(product => {
        const plusButton = product.querySelector('.fa-plus-circle');
        const minusButton = product.querySelector('.fa-minus-circle');
        const quantityElement = product.querySelector('.quantity');
        const unitPriceElement = product.querySelector('.querySelectorAll');
        
        
    
        }

        plusButton.addEventListener('click', function() {
            quantity++;
            price += 2;
            quantityElement.textContent = quantity;
            unitPriceElement.textContent = price;
        });

        minusButton.addEventListener('click', function() {
            if (quantity > 0) {
                quantity--;
                price -= 2;
                quantityElement.textContent = quantity;
                unitPriceElement.textContent = price;
            }
        });
    });**/


    /**  document.addEventListener("DOMContentLoaded", function() {
        const products = document.querySelectorAll(".card");
    
        products.forEach(product => {
            const plusButton = product.querySelector('.fa-plus-circle');
            const minusButton = product.querySelector('.fa-minus-circle');
            const quantityElement = document.querySelectorAll('quantity');
            const unitPriceElement = document.querySelectorAll('.unit-price');
            
            
            let price = parseInt(unitPriceElement.textContent); 
            const totalPrice =document.querySelector('total-price');
            const quantityElement = document.querySelectorAll('quantity');
            const unitPriceElement = document.querySelectorAll('.unit-price');
            
            
            let quantity =parseInt(quantityElement.textContent);
            let unitPrice =parseFloat(unitPriceElement.textContent.replace("$", ""));
            let total =parseFloat(totalPrice.textContent.replace("$", ""));
            
            
            function update  (){
            total = quantity*unitPrice;
            totalPrice.textContent = total.toFixed(2) + "$";
            }
            plusButton.addEventListener('click', function() {
                quantity++;
            
                quantityElement.textContent = quantity;
                unitPriceElement.textContent = price;
                update();
            });
    
            minusButton.addEventListener('click', function() {
                if (quantity > 0) {
                    quantity--;
                    
                    quantityElement.textContent = quantity;

                    unitPriceElement.textContent = price;
                    update();
                }
            });
        });
    });**/
    
   /**  document.addEventListener("DOMContentLoaded", function() {
        const products = document.querySelectorAll(".card");
       let totalPrix =0;
       
        products.forEach(product => {
            const plusButton = product.querySelector('.fa-plus-circle');
            const minusButton = product.querySelector('.fa-minus-circle');
            const quantityElement = product.querySelector('.quantity');
            const unitPriceElement = product.querySelector('.unit-price');
            const totalPriceElement = document.querySelector('.total-price');
            function updateTotal() {
                total = quantity * price;
                totalPriceElement.textContent = total.toFixed(2) + "$";
            }
           
            let quantity = parseInt(quantityElement.textContent);
            let price = parseFloat(unitPriceElement.textContent.replace("$", ""));
        let total = parseFloat(totalPriceElement.textContent.replace("$", ""));
    
           
    
            plusButton.addEventListener('click', function() {
                quantity++;
                quantityElement.textContent = quantity;
                total = quantity * price;
                updateTotal();
            });
    
            minusButton.addEventListener('click', function() {
                if (quantity > 0) {
                    quantity--;
                    quantityElement.textContent = quantity;
                    total = quantity * price;
                    updateTotal();

                }
            });
        });
    });**/

   /**  document.addEventListener("DOMContentLoaded", function() {
        const products = document.querySelectorAll(".card");
        const totalPriceElement = document.querySelector('.total-price');
    
        let totalPrice = 0;
       



    
        products.forEach(product => {
            const plusButton = product.querySelector('.fa-plus-circle');
            const minusButton = product.querySelector('.fa-minus-circle');
            const quantityElement = product.querySelector('.quantity');
            const unitPriceElement = product.querySelector('.unit-price');
    
            let quantity = parseInt(quantityElement.textContent);
            let price = parseFloat(unitPriceElement.textContent.replace("$", ""));
    
            function updateTotal() {
                // Calculate total for this product
                totalPrice = 0;
                products.forEach(prod => {
                    const quantity = parseInt(prod.querySelector('.quantity').textContent);
                    totalPrice += quantity * price;
                });
                
                // Add this product's total to the overall total price
                
                // Update total price element text content
                totalPriceElement.textContent = totalPrice.toFixed(2) + "$";
            }
    
            plusButton.addEventListener('click', function() {
                quantity++;
                quantityElement.textContent = quantity;
                updateTotal();
            });
    
            minusButton.addEventListener('click', function() {
                if (quantity > 0) {
                    quantity--;
                    quantityElement.textContent = quantity;
                    updateTotal();
                }

            }); updateTotal();

        });
    });**/

   /**  document.addEventListener("DOMContentLoaded", function() {
        const products = document.querySelectorAll(".card");
        const totalPriceElement = document.querySelector('.total-price');
    
        function updateTotal() {
            let total = 0;
            products.forEach(product => {
                const quantityElement = product.querySelector('.quantity');
                const unitPriceElement = product.querySelector('.unit-price');
    
                let quantity = parseInt(quantityElement.textContent);
                let price = parseFloat(unitPriceElement.textContent.replace("$", ""));
                total += quantity * price;
            });
            totalPriceElement.textContent = total.toFixed(2) + "$";
        }
    
        products.forEach(product => {
            const plusButton = product.querySelector('.fa-plus-circle');
            const minusButton = product.querySelector('.fa-minus-circle');
    
            plusButton.addEventListener('click', function() {
                let quantityElement = product.querySelector('.quantity');
                let quantity = parseInt(quantityElement.textContent);
                quantity++;
                quantityElement.textContent = quantity;
                updateTotal();
            });
    
            minusButton.addEventListener('click', function() {
                let quantityElement = product.querySelector('.quantity');
                let quantity = parseInt(quantityElement.textContent);
                if (quantity > 0) {
                    quantity--;
                    quantityElement.textContent = quantity;
                    updateTotal();
                }
            });
        });
    
        
        updateTotal();
    });**/
    
    const hearts = document.querySelectorAll(".card");

hearts.forEach(card => {
    const heart = card.querySelector('.fa-heart');
    heart.addEventListener('click', function() {
        heart.style.color = 'red';
        console.log('click heart');
    });
});
