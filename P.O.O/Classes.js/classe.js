import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"; 



const cliente4 = new Cliente();
const cliente5 = new Cliente();
const cliente6 = new Cliente();
const cliente7 = new Cliente();
const cliente8 = new Cliente();

const cliente1 = new Cliente();
cliente1.nome = "Íthan";
cliente1.cpf = 10781629640;
console.log(cliente1);

const cliente2 = new Cliente();
cliente2.nome = "Laristar";
cliente2.cpf = 20052008;
console.log(cliente2);

const cliente3 = new Cliente();
cliente3.nome = "Manuela";
cliente3.cpf = 20052008;
console.log(cliente3);



const contaCorrenteÍthan = new ContaCorrente();
contaCorrenteÍthan.agencia = 1002;
contaCorrenteÍthan.saldo = 2000;
contaCorrenteÍthan.cliente = cliente2;
//contaCorrenteÍthan.sacar(200);
console.log(contaCorrenteÍthan);

contaCorrenteÍthan.depositar(400);
const valorDeposito = contaCorrenteÍthan.depositar(400); //Aqui, ele considera que é necessário depositar mais 400 no saldo também
console.log(valorDeposito);
contaCorrenteÍthan.transferir(2800);
console.log(contaCorrenteÍthan);

//Para utilizar uma "classe dentro da outra", o nome técnico correto é instanciação
console.log("\n\n");
console.log(contaCorrenteÍthan);

const contaCorrenteManu = new ContaCorrente();
contaCorrenteManu.agencia = 1003;
contaCorrenteManu.saldo = 2000;
contaCorrenteManu.cliente = cliente3;
//Para utilizar uma "classe dentro da outra", o nome técnico correto é instanciação

console.log("\n\n");
contaCorrenteÍthan.depositar(500);
contaCorrenteÍthan.transferir(200, contaCorrenteManu);
console.log(contaCorrenteÍthan);
console.log(contaCorrenteManu)







