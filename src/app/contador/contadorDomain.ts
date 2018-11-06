import { DISABLED } from "@angular/forms/src/model";
import { matSelectAnimations } from "@angular/material";
import { Component, Input, OnInit } from '@angular/core';

export class ContadorDomain {
    valor = 0
    valorLimite = 0
    cantAcomp: String
    errorMessage: string = ""
    leyendaMas: String = "No se puede superar la cantidad de invitados"
    leyendaMenos: String = "Reducir los acompañantes"
    constructor(valorInicial: number) {
        this.valor = valorInicial
        this.valorLimite = valorInicial
    }
    ngOnInit() {
        this.seteoInicialTooltips()
    }
    seteoInicialTooltips() {
        if (this.valorLimite == 0) {
            {
            this.leyendaMenos = this.leyendaMas="No Puede llevar acompañantes"
           
            }

        }
    }
    sumar(invitacon) {
        if (this.valor < this.valorLimite) {
            this.valor++
            if (this.valor == this.valorLimite) {
                this.leyendaMas = "No puede superar la cantidad de acompañantes invitados"
            }

        } else { this.errorMessage = "max de acomp" }
        if (this.valor == this.valorLimite) {
            console.log(this.valor)
        }
    }

    restar() {
        if (this.valor > 0) {
            this.valor--
            this.leyendaMas = "Puede llevar más Acompañantes"
            if (this.valor == 0) { this.leyendaMenos = "La Cantidad de Acompañantes ya es 0" }
        }

    }
    getValor2() {
        return this.valor
    }
    getLeyendaMas() { return this.leyendaMas }
    getLeyendaMenos() { return this.leyendaMenos }
}
