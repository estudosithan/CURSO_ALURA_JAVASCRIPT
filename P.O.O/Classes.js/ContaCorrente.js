export class ContaCorrente{
    
    agencia; //Atributo agência
    saldo;  //Atributo saldo
    cliente; //Atributo Cliente
    

    sacar(valor){ //Função ou método para realizar alguma operação na conta corrente, modificando a propriedade (saldo)
        if(this.saldo >= valor){ //" this" utilizado para fazer menção a conta corrente específica que está sendo utilizada no momento
            this.saldo -= valor;
            return valor; //Para voltar para mim o valor que está sendo sacado para que eu possa usar no restante do programa
        }
    }
    
    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            
        }
    }

    transferir(valor, conta){
        if(this.saldo > 0 && this.saldo >= valor){
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
    }
}