const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const colorsCopyWithoutIndex2 = [...colors.slice(0, 2), ...colors.slice(3)];

console.log("Original Array:", colors);
console.log("Copied Array Without Index 2:", colorsCopyWithoutIndex2);
