//Js é caso sensitivo, ou seja, se importa com letras maiusculas e minusculas

const carro = "Honda";
let ano = 2019;

console.log(`O carro é ${carro} e o ano ${ano}`);


ano = 2020

console.log(`O carro é ${carro} e o ano ${ano}`)

//Igualdade 
console.log(2 == "2")
console.log(2 === "2")
//Concatenação
console.log("ano" + " " + "2020")
console.log(carro + " " + ano)
//console.log(carro, ano) método identico ao anterior mas mais utilizado
//Manipulação de tipos
console.log(parseInt("5") / 2)
console.log(parseInt("Ricardo") / 2)
console.log("10" * "2")



let nome = "Íthan";
const sobrenome = " Amaral";

nome = nome + sobrenome;

console.log(nome)