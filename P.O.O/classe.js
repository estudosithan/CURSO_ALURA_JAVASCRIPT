class cliente{

    nome; //Propriedade nome
    cpf; //Propriedade cpf
}

class ContaCorrente{
    
    agencia; //Propriedade agência
    #saldo;  //Propriedade saldo

    sacar(valor){ //Função ou método para realizar alguma operação na conta corrente, modificando a propriedade (saldo)
        if(this.saldo >= valor){ //" this" utilizado para fazer menção a conta corrente específica que está sendo utilizada no momento
            this.saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }

    transferir(valor){
        if(this.saldo > 0 && this.saldo >= valor){
            this.saldo -= valor
        }
    }
}

const cliente4 = new cliente();
const cliente5 = new cliente();
const cliente6 = new cliente();
const cliente7 = new cliente();
const cliente8 = new cliente();

const cliente1 = new cliente();
cliente1.nome = "Íthan";
cliente1.cpf = 10781629640;
cliente1.agencia = 1000;
cliente1.saldo = 2500;
console.log(cliente1);

const cliente2 = new cliente();
cliente2.nome = "Laristar";
cliente2.cpf = 20052008;
cliente2.agencia = 1001;
cliente2.saldo = 5500
console.log(cliente2);

const cliente3 = new cliente();
cliente3.nome = "Manuela";
cliente3.cpf = 20052008;
cliente3.agencia = 1001;
cliente3.saldo = 20000;
console.log(cliente3);

const contaCorrenteÍthan = new ContaCorrente();
contaCorrenteÍthan.agencia = 1002;
contaCorrenteÍthan.saldo = 2000;
//contaCorrenteÍthan.sacar(200);
console.log(contaCorrenteÍthan);

contaCorrenteÍthan.depositar(400);
console.log(contaCorrenteÍthan)
contaCorrenteÍthan.transferir(2400);
console.log(contaCorrenteÍthan)













