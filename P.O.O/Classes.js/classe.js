class cliente{

    nome; //Propriedade nome
    cpf; //Propriedade cpf
}

class ContaCorrente{
    
    agencia; //Propriedade agência
    saldo;  //Propriedade saldo

    sacar(valor){ //Função ou método para realizar alguma operação na conta corrente, modificando a propriedade (saldo)
        if(this.saldo >= valor){ //" this" utilizado para fazer menção a conta corrente específica que está sendo utilizada no momento
            this.saldo -= valor;
            return valor; //Para voltar para mim o valor que está sendo sacado para que eu possa usar no restante do programa
        }
    }
    
    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            return valor; //Para voltar para mim o valor que está sendo depositado para que eu possa usar no restante do programa
        }
    }

    transferir(valor){
        if(this.saldo > 0 && this.saldo >= valor){
            this.saldo -= valor
            return valor; //Para voltar para mim o valor que está sendo transferido para que eu possa usar no restante do programa
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
console.log(cliente1);

const cliente2 = new cliente();
cliente2.nome = "Laristar";
cliente2.cpf = 20052008;
console.log(cliente2);

const cliente3 = new cliente();
cliente3.nome = "Manuela";
cliente3.cpf = 20052008;
console.log(cliente3);



const contaCorrenteÍthan = new ContaCorrente();
contaCorrenteÍthan.agencia = 1002;
contaCorrenteÍthan.saldo = 2000;
//contaCorrenteÍthan.sacar(200);
console.log(contaCorrenteÍthan);

contaCorrenteÍthan.depositar(400);
const valorDeposito = contaCorrenteÍthan.depositar(400);
console.log(valorDeposito);
contaCorrenteÍthan.transferir(2800);
console.log(contaCorrenteÍthan);













