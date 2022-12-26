import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { NavegComponent } from './naveg/naveg.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { LateralComponent } from './lateral/lateral.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    NavegComponent,
    ContenidoComponent,
    LateralComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    NavegComponent,
    ContenidoComponent,
    LateralComponent,
    FooterComponent
  ]
})
export class ComponentModule { }
