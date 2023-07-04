let display = document.getElementById("resultado");
let operador = "";
let numero = "";
let ultimodigito = "";

function ingresar(num) {
  if (num === '+' || num === '-' || num === '*' || num === '/') {
    operador = num;
    numero = ultimodigito;
    ultimodigito = "";
    display.innerHTML = operador;
  }
  // reseteo
  else if (num === 'AC') {
    display.innerHTML = "";
    operador = "";
    numero = "";
    ultimodigito = "";
  }
  // resultado
  else if (num === '=') {
    let resultado = calcularResultado();
    display.innerHTML = resultado;
    operador = "";
    numero = resultado;
    ultimodigito = "";
  }
  // Comprobar si se pulsó un número
  else {
    ultimodigito = ultimodigito + num;
    display.innerHTML = ultimodigito;
  }
}

function calcularResultado() {
  let num1 = parseFloat(numero);
  let num2 = parseFloat(ultimodigito);
  let resultado = 0;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
  }

  return resultado;
}
