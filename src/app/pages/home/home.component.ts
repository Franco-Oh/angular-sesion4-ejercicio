import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre = "Jon";

  changeName(){
    this.nombre = "El SECH";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
