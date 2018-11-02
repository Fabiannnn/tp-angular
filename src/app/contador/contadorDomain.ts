

export class ContadorDomain {
    valor = 0
valorLimite=0
cantAcomp:String
    constructor(valorInicial : number) {
        this.valor = valorInicial
        this.valorLimite=valorInicial
    }

    sumar(invitacon) {
        if (this.valor<this.valorLimite){this.valor++
    } 
    
        console.log(this.valor)
 
    }

    restar() {
       if(this.valor>0) {this.valor--
     }
       console.log(this.valor)
  
    }
 getValor2(){
     return this.valor
 } 

}
