import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAutomovilesComponent } from './actualizar-automoviles/actualizar-automoviles.component';
import { AutomovilesComponent } from './automoviles/automoviles.component';
import { BaseDeDatosComponent } from './base-de-datos/base-de-datos.component';
import { BusquedaPatenteComponent } from './busqueda-patente/busqueda-patente.component';
import { CrearAutomovilesComponent } from './crear-automoviles/crear-automoviles.component';
import { CrearMarcaComponent } from './crear-marca/crear-marca.component';
import { CrearModeloComponent } from './crear-modelo/crear-modelo.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { Error404Component } from './error404/error404.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { VentasComponent } from './ventas/ventas.component';
import { VerAutomovilesComponent } from './ver-automoviles/ver-automoviles.component';
import { VerVentaComponent } from './ver-venta/ver-venta.component';

const routes: Routes = [
  // RUTA POR DEFECTO
  {path:'', redirectTo: 'automoviles',pathMatch:'full'},
  // RESTO DE RUTAS
  {path:'automoviles', component: AutomovilesComponent},
  {path:'publicaciones', component: PublicacionesComponent},
  {path:'ventas', component: VentasComponent},
  {path:'ver-automovil/:id', component: VerAutomovilesComponent},
  {path:'crear-automovil', component: CrearAutomovilesComponent},
  {path:'editar-automovil/:id', component: ActualizarAutomovilesComponent},
  {path:'buscar-patente/:patente', component: BusquedaPatenteComponent},
  {path:'crear-publicacion', component: CrearPublicacionComponent},
  {path:'ver-venta/:id', component: VerVentaComponent},
  {path:'base-de-datos', component: BaseDeDatosComponent},
  {path:'crear-marca', component: CrearMarcaComponent},
  {path:'crear-modelo', component: CrearModeloComponent},
  // RUTA ERROR 404
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
