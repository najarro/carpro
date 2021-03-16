import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocheClickedService {

  coches: Array<string>;

  constructor() {
    this.coches = [];
  }

   cocheVisto(cocheVisto:any){
    let nombreCoche = cocheVisto.payload.doc.data().fabricante + ' ' + cocheVisto.payload.doc.data().modelo;
    //  console.log(nombreCoche);
     this.coches.push(nombreCoche);
   }

   verListado(){
    return this.coches;
    }
}
