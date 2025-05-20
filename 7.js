let quantidade = parseInt(prompt("Quantas maçãs deseja comprar?"));
let preco = quantidade < 12 ? 0.30 : 0.25;
let total = quantidade * preco;
console.log("Total da compra: R$ " + total.toFixed(2));
