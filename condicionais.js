console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log("Não é maior de Idade e não posso vender");
// }

const PodeComprar = (idadeComprador >= 18 || estaAcompanhada == true) == true;
console.log(PodeComprar);

//ou
// if (idadeComprador >= 18 || estaAcompanhada == true) {
//     console.log("Boa Viagem!!");
//     listaDeDestinos.splice(2, 1); //removendo item
//     temPassagemComprada = true;
// } else {
//     console.log("Não é maior de Idade e não posso vender");
//     temPassagemComprada = false;
// }

console.log("Embarque: \n\n");
if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa viagem");
} else {
  console.log("Você não pode embarcar");
}

let contador = 0;
const destino = "Rio de Janeiro";


//Para exibir com loop
while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    console.log("Destino Existe");
    break; //Para evitar que o loop se repita e exiba resultados indesejados
  } else {
    console.log("Destino não Existe");
  }
  contador++;
}
