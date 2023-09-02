function sumar(valor1, valor2) {
  const resultado = valor1 + valor2;
  return resultado;
}
function restar(valor1, valor2) {
  const resultado = valor1 - valor2;
  return resultado;
}
function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2;
  return resultado;
}
function dividir(valor1, valor2) {
  const resultado = valor1 / valor2;
  return resultado;
}

function calculadora() {
  let operacion;

  while (operacion != "salir") {
    operacion = prompt(
      "Elija la operacion que desea utilizar:\n+ : Suma\n- : Resta\n* : Multiplicacion\n/ : Division"
    );

    operacion = operacion.toLowerCase();

    switch (operacion) {
      case "+":
        valor1 = parseInt(prompt("Ingrese el primer valor"));
        valor2 = parseInt(prompt("Ingrese el segundo valor"));
        alert("El resultado de la suma es " + sumar(valor1, valor2));
        break;
      case "-":
        valor1 = parseInt(prompt("Ingrese el primer valor"));
        valor2 = parseInt(prompt("Ingrese el segundo valor"));
        alert("El resultado de la resta es " + restar(valor1, valor2));
        break;
      case "*":
        valor1 = parseInt(prompt("Ingrese el primer valor"));
        valor2 = parseInt(prompt("Ingrese el segundo valor"));
        alert(
          "El resultado de la multiplicacion es " + multiplicar(valor1, valor2)
        );
        break;
      case "/":
        valor1 = parseInt(prompt("Ingrese el primer valor"));
        valor2 = parseInt(prompt("Ingrese el segundo valor"));
        alert("El resultado de la division es " + dividir(valor1, valor2));
        break;
      case "salir":
        alert("La calculadora se ha cerrado");
        break;
      default:
        alert("La operacion es invalida");
        break;
    }
  }
}
