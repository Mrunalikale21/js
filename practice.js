let arr = [5,6];
arr.unshift(4);
console.log(arr);
arr.push(7);
console.log(arr);

function getElement(arr, positon){
  return arr[positon - 1];
}

let arr2 = [1,2,3,4,5,6];
console.log(getElement(arr2, 4));

function arrCopy(arr3){
  return arr3.slice(0, arr3.length);
}

let arr3 = [2,45,67,89,70];
console.log(arrCopy(arr3));

function isPrime(num){
  for( let i = 2; i < num ; i++){
    if( num % i === 0){
      return false;
    }
  }
  return true;
}

let num = 2;
let i = 0;
while(true){
  if(isPrime(num)){
    console.log(num);
    i++;
    if(i >= 5){
      break;
    }
  }
  num++;
}

for(let i = 10; i > 0; i--){
  console.log(i);
}

for(let i = 0; i<10; i++ ){
  console.log(10 - i);
}

let num2 = [1,-6,5,7,-98];
for(let i =0; i<num2.length; i++){
  if(num2[i] < 0) continue;
  console.log(num2[i]);
}

let arr5 = ['KG', 'coding', 'javascript', 'cousre', 'is', 'best'];
let result = '';
for(let i =0 ; i< arr5.length; i++){
  result += arr5[i] + ' ';
}
console.log(result);