// function Carro(velocidadeMaxima = 200, delta = 5) {
//     // Atributo Privado
//     let velocidadeAtual = 0

//     // Método Público
//     this.acelerar = function () {
//         if (velocidadeAtual + delta <= velocidadeMaxima) {
//             velocidadeAtual += delta
//         } else {
//             velocidadeAtual = velocidadeMaxima
//         }
//     }

//     // Método Público
//     this.getVelocidadeAtual = function () {
//         return velocidadeAtual
//     }
// }

// const uno = new Carro
// uno.acelerar()
// console.log(uno.getVelocidadeAtual())

// const ferrari = new Carro(350, 20)
// ferrari.acelerar()
// console.log(ferrari.getVelocidadeAtual())

// console.log(typeof Carro)
// console.log(typeof ferrari)


/* const converterTemperatura = (temperatura, escala) => {
    if (escala === 'C') {
        return (temperatura - 32) * 5 / 9; // Fahrenheit para Celsius
    } else if (escala === 'F') {
        return (temperatura * 9 / 5) + 32; // Celsius para Fahrenheit
    } else {
        return "Escala inválida";
    }
};

console.log(converterTemperatura(100, "C")); // 37.777... (Fahrenheit para Celsius)
console.log(converterTemperatura(0, "F")); // 32 (Celsius para Fahrenheit)
console.log(converterTemperatura(25, "F")); // 77 (Celsius para Fahrenheit)
console.log(converterTemperatura(50, "X")); // "Escala inválida" */

  // Crie a função aqui
  const converterTemperatura = (temperatura, escala) => {
    if (escala === 'C') {
  return (temperatura - 32) * 5 / 9)
}	else if (escala === 'F') {
      return (temperatura * 9 / 5) + 32
} else { 
  return "Escala inválida"
}
}

console.log(converterTemperatura(100, "C")); // 37.777... (Fahrenheit para Celsius)
console.log(converterTemperatura(0, "F")); // 32 (Celsius para Fahrenheit)
console.log(converterTemperatura(25, "F")); // 77 (Celsius para Fahrenheit)
console.log(converterTemperatura(50, "X")); // "Escala inválida"