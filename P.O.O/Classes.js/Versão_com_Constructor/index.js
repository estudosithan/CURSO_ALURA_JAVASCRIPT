import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"; 



const cliente4 = new Cliente();
const cliente5 = new Cliente();
const cliente6 = new Cliente();
const cliente7 = new Cliente();
const cliente8 = new Cliente();

//LIDANDO COM CONSTRUTORES
//CONSTRUTOR DE CLIENTE
const cliente1 = new Cliente("Íthan" , 10781629640); //Como agora tenho construtores, utilizo os parâmetros para passar as informações a ele
console.log(cliente1);

const cliente2 = new Cliente("Laristar" , 20052008);
console.log(cliente2);

const cliente3 = new Cliente("Manuela" , 20052008);
console.log(cliente3);

console.log("\n\n");



//CONSTRUTOR DE CONTACORRENTE
const contaCorrenteÍthan = new ContaCorrente(1002 , 2000 ,  cliente1);//Para utilizar uma "classe dentro da outra", o nome técnico correto é instanciação
 //Não deixou atribuir por ter o getter, que não permite atribuição
console.log(contaCorrenteÍthan);
const contaCorrenteManu = new ContaCorrente(1003 , 2000 , cliente3);
console.log(contaCorrenteManu);
console.log("\n\n");



//OPERAÇÕES DO BANCO
contaCorrenteÍthan.depositar(500);
contaCorrenteÍthan.transferir(200, contaCorrenteManu); //Para manipular uma "classe com a outra".
console.log(contaCorrenteÍthan);
console.log(contaCorrenteManu);
console.log("\n\n");
console.log("A quantidade de contas cadastradas foi de:",ContaCorrente.numeroDeConta,"contas")




