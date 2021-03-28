//callback es una funcion que recibe otra funcion como argumento/parametro
function suma(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

const result = calc(100, 28, suma);
console.log(result);

function date(callback) {
  console.log(new Date());
  setTimeout(() => {
    let date = new Date();

    callback(date);
  }, 3000);
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);
