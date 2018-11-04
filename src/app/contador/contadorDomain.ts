import { DISABLED } from "@angular/forms/src/model";
import { matSelectAnimations } from "@angular/material";


export class ContadorDomain {
    valor = 0
    valorLimite = 0
    cantAcomp: String
    errorMessage: string = ""
    constructor(valorInicial: number) {
        this.valor = valorInicial
        this.valorLimite = valorInicial
    }

    sumar(invitacon) {
        if (this.valor < this.valorLimite) {
            this.valor++
        } else { this.errorMessage = "max de acomp" }
        if (this.valor == this.valorLimite) {
            console.log(this.valor)
        }
    }

    restar() {
        if (this.valor > 0) {
            this.valor--
        } else {
        this.errorMessage = "max de acomp"
        }
        console.log(this.valor)

    }
    getValor2() {
        return this.valor
    }

}
