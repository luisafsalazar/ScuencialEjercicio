let v1, v2, v3;
let totalPagar = 0;
let totalVentas = 0;
let salarioBase = 0;
let comision = 0;

v1 = Number(prompt('Ingresa la venta 1: '));
v2 = Number(prompt('Ingresa la venta 2: '));
v3 = Number(prompt('Ingresa la venta 3: '));
salarioBase = Number(prompt('Ingresa el salario base: '));

totalVentas = v1 + v2 + v3;
comision = totalVentas * 0.1;
totalPagar = comision + salarioBase

console.log(totalVentas)
console.log(comision)
console.log(totalPagar)