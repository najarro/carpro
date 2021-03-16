import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cochedetalle',
  templateUrl: './cochedetalle.component.html',
  styleUrls: ['./cochedetalle.component.css']
})
export class CochedetalleComponent implements OnInit {

  @Input() coche: any;
  @Output() cocheComprado: EventEmitter<any> = new EventEmitter();
  public compra: string;
  private disable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.compra = `Comprar`;
  }

  comprar(coche) {
    this.disable = true;
    this.compra = '¡Comprado!';
    //console.log(coche.payload.doc.id);
    this.cocheComprado.emit(coche);
  }

  isdisabled() {
    // console.log(this.coche.payload.doc.data().modelo);
    return !!this.disable;
  }
}
