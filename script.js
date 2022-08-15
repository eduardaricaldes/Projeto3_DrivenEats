let foodName = "";
let foodPrice = 0;
  
let drinkName = "";
let drinkPrice = 0;
  
let dessertName = "";
let dessertPrice = 0;

let enabledSubmit = false;

function drivenEats(op, type) {
  if(type == 'food'){
    const foodOptionsSelected = document.querySelectorAll('.foods .items .card.selected')
    const foodSelectedSelector = '.foods .items .'+op;
    const foodSelected = document.querySelector(foodSelectedSelector);
    
    if (foodOptionsSelected.length == 0) {
      foodSelected.classList.toggle('selected');
      const foodNameSelector = '.foods .items .'+op+' .card-body .title';
      const foodPriceSelector = '.foods .items .'+op+' .card-body .preco .value';
      const foodNameElement = document.querySelector(foodNameSelector).textContent;
      const foodPriceElement = document.querySelector(foodPriceSelector).textContent;
      foodName =  foodNameElement;
      foodPrice = parseFloat(foodPriceElement.replace(',','.'));
    }

    if (foodOptionsSelected.length == 1 ) {
      foodSelected.classList.remove('selected');
      foodName =  '';
      foodPrice = 0;
      enabledSubmit = false;
    }
  }
  else if(type == 'drink'){
    const drinkOptionsSelected = document.querySelectorAll('.drinks .items .card.selected')

    const drinkSelectedSelector = '.drinks .items .'+op;
    const drinkSelected = document.querySelector(drinkSelectedSelector);
    if (drinkOptionsSelected.length == 0 ) {
      drinkSelected.classList.toggle('selected');
      const drinkNameSelector = '.drinks .items .'+op+' .card-body .title';
      const drinkPriceSelector = '.drinks .items .'+op+' .card-body .preco .value';
      const drinkNameElement = document.querySelector(drinkNameSelector).textContent;
      const drinkPriceElement = document.querySelector(drinkPriceSelector).textContent;
      drinkName =  drinkNameElement;
      drinkPrice = parseFloat(drinkPriceElement.replace(',','.'));
    }

    if (drinkOptionsSelected.length == 1 ) {
      drinkSelected.classList.remove('selected');
      drinkName =  '';
      drinkPrice = 0;
      enabledSubmit = false;
    }
  }
  else if(type == 'dessert'){
    const dessertOptionsSelected = document.querySelectorAll('.desserts .items .card.selected')

    const dessertSelectedSelector = '.desserts .items .'+op;
    const dessertSelected = document.querySelector(dessertSelectedSelector);
    if (dessertOptionsSelected.length == 0 ) {
      dessertSelected.classList.toggle('selected');
      const dessertNameSelector = '.desserts .items .'+op+' .card-body .title';
      const dessertPriceSelector = '.desserts .items .'+op+' .card-body .preco .value';
      const dessertNameElement = document.querySelector(dessertNameSelector).textContent;
      const dessertPriceElement = document.querySelector(dessertPriceSelector).textContent;
      dessertName =  dessertNameElement;
      dessertPrice = parseFloat(dessertPriceElement.replace(',','.'));
    }

    if (dessertOptionsSelected.length == 1 ) {
      dessertSelected.classList.remove('selected');
      dessertName =  '';
      dessertPrice = 0;
      enabledSubmit = false;
    }
  }

  const buttonSubmit = document.querySelector('.submit-order');
  if (foodName === '' || drinkName === '' || dessertName === '') {
    buttonSubmit.classList.remove('enabled');
    buttonSubmit.innerHTML = 'Selecione os 3 itens para fechar o pedido';
    enabledSubmit = false;
  }

  if (foodName !== '' && drinkName !== '' && dessertName !== '') {
    buttonSubmit.classList.add('enabled');
    buttonSubmit.innerHTML = 'Fechar Pedido';
    enabledSubmit = true;
  }
}

function submit(){
  if(enabledSubmit === true) {
    const sumMenu = foodPrice + drinkPrice + dessertPrice;
    
    const orderElement = document.querySelector('.container-order');
    orderElement.classList.add('active');
    
    const orderFoodNameElement = document.querySelector('.container-order .food .name');
    const orderFoodValueElement = document.querySelector('.container-order .food .value');
    const orderDrinkNameElement = document.querySelector('.container-order .drink .name');
    const orderDrinkValueElement = document.querySelector('.container-order .drink .value');
    const orderDessertNameElement = document.querySelector('.container-order .dessert .name');
    const orderDessertValueElement = document.querySelector('.container-order .dessert .value');
    const orderTotalElement = document.querySelector('.container-order .total .value');

    orderFoodNameElement.innerHTML = foodName;
    orderFoodValueElement.innerHTML = foodPrice.toFixed(2);

    orderDrinkNameElement.innerHTML = drinkName;
    orderDrinkValueElement.innerHTML = drinkPrice.toFixed(2);

    orderDessertNameElement.innerHTML = dessertName;
    orderDessertValueElement.innerHTML = dessertPrice.toFixed(2);

    orderTotalElement.innerHTML = sumMenu.toFixed(2)
  }
}

function send() {
  const sumMenu = foodPrice + drinkPrice + dessertPrice;
  const textMessage = "Olá, gostaria de fazer o pedido:"+
      "- Prato: "+ foodName +
      "- Bebida: " + drinkName +
      "- Sobremesa: "+ dessertName +
      "Total: R$ "+ sumMenu.toFixed(2)
  const encodedMessage = encodeURIComponent(textMessage);
  window.location.href = "https://wa.me/5592991826253?text="+encodedMessage;
}

function cancel() {
  const orderElement = document.querySelector('.container-order');
  orderElement.classList.remove('active');
}