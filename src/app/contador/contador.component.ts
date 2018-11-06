import { Component, Input, OnInit } from '@angular/core';
import { ContadorDomain } from './contadorDomain';
import{ MatTooltipModule} from '@angular/material/tooltip';
import { PendientesComponent } from '../pendientes/pendientes.component';
import {CdkTableModule} from '@angular/cdk/table';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})


export class ContadorComponent  implements OnInit {

  @Input() 
  valorInicial: number
  contador2: ContadorDomain



ngOnInit() {
  this.contador2 = new ContadorDomain(this.valorInicial)
}
getValor(){
  console.log("en contador componente this.contador.getValor2().toString()   " + this.contador2.getValor2().toString())
  return this.contador2.getValor2().toString()
  
}
getLeyendaMas(){
  return this.contador2.getLeyendaMas()
}
}
