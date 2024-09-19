import {Cliente} from "./Cliente.js"
export class ContaCorrente{
    
    //ESSA É´A VERSÃO COM CONSTRUCTOR, TUDO FEITO ANTES É MAIS DO QUE POSSÍVEL SEM ELE, MAS ELE FACILITA MTO AS COISAS

    agencia; //Atributo agência
    _saldo;  //Atributo saldo
    _cliente; //Atributo Cliente
    

    constructor(agencia, _saldo , _cliente){
        //O construtor menciona os próprios atributos

        this.agencia = agencia;
        this._saldo = _saldo;
        this._cliente = _cliente;
    }



    sacar(valor){ //Função ou método para realizar alguma operação na conta corrente, modificando a propriedade (saldo)
        if(this._saldo >= valor){ //" this" utilizado para fazer menção a conta corrente específica que está sendo utilizada no momento
            this._saldo -= valor;
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
            this._saldo += valor;
            
        }
    }

    transferir(valor, conta){
        if(this._saldo >= valor){ // Checa se o saldo é suficiente para a transferência
            const valorSacado = this.sacar(valor);
            if (valorSacado > 0) { // Garante que o valor sacado é válido
                conta.depositar(valorSacado);
            }
        } else {
            console.log("Saldo insuficiente para transferir.");
        }
    }
}