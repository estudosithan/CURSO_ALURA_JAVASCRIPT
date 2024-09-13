const listadeDestinos = [
  "Brumadinho",
  "Belo Horizonte",
  "Rio De Janeiro",
  "Paraná",
];

console.log(listadeDestinos);
//ou
for (let n = 0; n < 4; n++) {
  console.log(`As cidades são: ${listadeDestinos[n]}`);
}

listadeDestinos.push("Bahia");
console.log(listadeDestinos);
listadeDestinos.unshift("Inhapim"); //Para adicionar no início do Array
console.log(listadeDestinos);
listadeDestinos.pop(); //Remove no final
listadeDestinos.shift(); //Remove no início
console.log(listadeDestinos);

//Para remover elementos selecionados
const listadeComida = new Array("Macarrão", "banana", "morango"); //Outra nomencaltura para Array
listadeComida.splice(1, 1); //Posição do elemento e a quantidade de elementos apartir da posição, ou seja a quantidade de elementos q ele vai tirar para a direita
console.log(listadeComida);
