let opcao = parseInt(prompt("Escolha uma opção:\n1 - Saudação\n2 - Hora\n3 - Sair"));
switch (opcao) {
  case 1:
    console.log("Olá!");
    break;
  case 2:
    console.log("Agora são " + new Date().toLocaleTimeString());
    break;
  case 3:
    console.log("Saindo...");
    break;
  default:
    console.log("Opção inválida");
}
