const numbers = [32, 21, 63, 95, 100, 67, 43];

const numeroEncontrado = numbers.find(numero => numero === 100);

if (numeroEncontrado !== undefined) {
  console.log("El número 100 fue encontrado en el array.");
} else {
  console.log("El número 100 no fue encontrado en el array.");
}
