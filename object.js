let product = {
  comapny : 'Myntra',
  price : 890,
  item_name : 'T-shirt',
  delivery_time : 4,
};
let product1 = {
  comapny : 'Myntra',
  price : 891,
  item_name : 'T-shirt',
  delivery_time : 4,
};
let product2= {
  comapny : 'Myntra',
  price : 890,
  item_name : 'shirt',
  delivery_time : 4,
};

let copyProduct = product;
console.log(product);
copyProduct.price = 894;
console.log(product);
copyProduct.comapny = 'flipkart';
console.log(product);

let x = {num : 5};
let y = x;
console.log(`${x} and ${y}`);

x= 8;
console.log(`${x} and ${y}`);

console.log(product['delivery_time']);

let message = {
  msg : 'good job',
  status : 'complete',
}

let {msg, status} = message;
console.log(msg);
console.log(status);

function isIdenticalProduct(product1, product2){
  if(typeof product1 !== 'object' || typeof product2 !== 'object'){
    console.warn('Parameter passed was not an object')
    return false;
  }

  if(product1 == product2){
    return true;
  }

  if(product1.comapny === product2.comapny &&
    product1.price === product2.proce &&
    product1['item_name'] === product2['item_name'] &&
    product1['delivery_time'] === product['delivery_time'] ){
      return true;
    }else{
      return false;
    }

  }



