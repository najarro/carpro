import { Component, OnInit } from '@angular/core';
import { CocheClickedService } from '../shared/coche-clicked.service';
import { CochesService } from "../shared/coches.service";

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.css']
})
export class CochesComponent implements OnInit {

  coches: any;
  cochesComprados: any;
  coche: any;
  errorHttp:Boolean = false;
  cargando: Boolean;
  public compra: string;
  private disable: boolean;

  clearElement:HTMLElement;

  constructor(public CocheClicked:CocheClickedService, private cochesService: CochesService) {
    this.cochesComprados = [];
   }

  ngOnInit(): void {
    this.cargando = true;
    this.compra = `Comprar`;

    this.getCoches();

    this.cargando = false;
  }

  getCoches = () => this.cochesService.getCoches().subscribe(res => (this.coches = res));

  agregarCoche(_cocheVisto:any){

    // console.log(_cocheVisto.payload.doc.data().modelo);

    this.CocheClicked.cocheVisto(_cocheVisto);
  }

  cocheComprado(coche) {
    this.cochesComprados.push(coche);
    this.agregarCoche(coche);
   }

  comprar(_event: any) {
    //console.log(_event.payload.doc.data().fabricante);
    this.cocheComprado(_event);
  }

  isdisabled() {
    // console.log(this.coche.payload.doc.data().modelo);
    return !!this.disable;
  }
}
