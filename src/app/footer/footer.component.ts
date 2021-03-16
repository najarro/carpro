import { Component, OnInit } from '@angular/core';
import { CocheClickedService } from '../shared/coche-clicked.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public CocheClicked:CocheClickedService) { }

  ngOnInit(): void {
  }

}
