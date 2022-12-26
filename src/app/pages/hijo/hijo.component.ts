import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  //@Input()
  nombreHijo = "Julian";
  //@Output() cambioNombreHijo = new 

  changeSonName(){
    this.nombreHijo = "El PEPE";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
