

export class Contador {
    valor = 0
valorLimite=0
    constructor(valorInicial : number) {
        this.valor = valorInicial
        this.valorLimite=valorInicial
    }

    sumar() {
        if (this.valor<this.valorLimite){this.valor++} 
        
    }

    restar() {
       if(this.valor>0) {this.valor--}
    }

}
