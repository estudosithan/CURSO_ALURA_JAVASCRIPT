import {Cliente} from "./Cliente.js"
export class ContaCorrente{
    
    agencia; //Atributo agência
    _saldo;  //Atributo saldo
    _cliente; //Atributo Cliente
    

    sacar(valor){ //Função ou método para realizar alguma operação na conta corrente, modificando a propriedade (saldo)
        if(this.saldo >= valor){ //" this" utilizado para fazer menção a conta corrente específica que está sendo utilizada no momento
            this.saldo -= valor;
            return valor; //Para voltar para mim o valor que está sendo sacado para que eu possa usar no restante do programa
        }
    }
    
    set cliente(novoCliente){ //Para fazer atribuições em atributos privados dentro da classe e não fazer fora dela
        //Vai mostrar indefinido se o atributo não for instanciado no meu código principal, por isso tem q importar
        if(novoCliente instanceof Cliente){

            this._cliente = novoCliente;
        }
    } 

    // get saldo(){
    //    return this._saldo;
    // }
    //Código acima comentado para não atrapalhar a execução


    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            
        }
    }

    transferir(valor, conta){
        if(this.saldo >= valor){ // Checa se o saldo é suficiente para a transferência
            const valorSacado = this.sacar(valor);
            if (valorSacado > 0) { // Garante que o valor sacado é válido
                conta.depositar(valorSacado);
            }
        } else {
            console.log("Saldo insuficiente para transferir.");
        }
    }
}