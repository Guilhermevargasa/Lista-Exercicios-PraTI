let A = parseFloat(prompt("Lado A:"));
let B = parseFloat(prompt("Lado B:"));
let C = parseFloat(prompt("Lado C:"));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log("Equilátero");
  } else if (A === B || A === C || B === C) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
} else {
  console.log("Não é um triângulo");
}
