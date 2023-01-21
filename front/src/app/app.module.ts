import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AutomovilesComponent } from './automoviles/automoviles.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { CrearAutomovilesComponent } from './crear-automoviles/crear-automoviles.component';
import { ActualizarAutomovilesComponent } from './actualizar-automoviles/actualizar-automoviles.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { VentasComponent } from './ventas/ventas.component';
import { AutomovilService } from './service/automovil.service';
import { HttpClientModule } from '@angular/common/http';
import { VerAutomovilesComponent } from './ver-automoviles/ver-automoviles.component';
import { FormsModule } from '@angular/forms';
import { BusquedaPatenteComponent } from './busqueda-patente/busqueda-patente.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { VerVentaComponent } from './ver-venta/ver-venta.component';
import { BaseDeDatosComponent } from './base-de-datos/base-de-datos.component';
import { CrearMarcaComponent } from './crear-marca/crear-marca.component';
import { CrearModeloComponent } from './crear-modelo/crear-modelo.component';

@NgModule({
  declarations: [
    AppComponent,
    AutomovilesComponent,
    HeaderComponent,
    NavComponent,
    CrearAutomovilesComponent,
    ActualizarAutomovilesComponent,
    PublicacionesComponent,
    VentasComponent,
    VerAutomovilesComponent,
    BusquedaPatenteComponent,
    CrearPublicacionComponent,
    VerVentaComponent,
    BaseDeDatosComponent,
    CrearMarcaComponent,
    CrearModeloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [AutomovilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
