import { Usuario } from "./Usuario";
import { Point } from "./Point";

export class Locacion {
  id:number;
  punto: Point;
  posicionX: number;
  posicionY: number;
  nombre: String;
  
  /*	distancia(otroPunto: Point): number {
		return this.punto.distance(otroPunto)
	}
*/
  capacidadMaxima(): number {
		return 20//Math.floor(superficie * personasPorMetroCuadrado) as int
    }
    /*
  estaDentroDelRadioDeCercania(usuario: Usuario): Boolean {
		return this.distancia(usuario.punto) <= usuario.radioDeCercania
  }*/
  
  constructor(id: number, nombre: String) {
    this.id=id;
    this.nombre = nombre;
  }
  static fromJson(locacionJson){
    let locacion= new Locacion(locacionJson.id, locacionJson.nombre)
return locacion
}
}
