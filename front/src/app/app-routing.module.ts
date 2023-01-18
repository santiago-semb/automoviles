import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarAutomovilesComponent } from './actualizar-automoviles/actualizar-automoviles.component';
import { AutomovilesComponent } from './automoviles/automoviles.component';
import { BusquedaPatenteComponent } from './busqueda-patente/busqueda-patente.component';
import { CrearAutomovilesComponent } from './crear-automoviles/crear-automoviles.component';
import { CrearPublicacionComponent } from './crear-publicacion/crear-publicacion.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { VentasComponent } from './ventas/ventas.component';
import { VerAutomovilesComponent } from './ver-automoviles/ver-automoviles.component';
import { VerVentaComponent } from './ver-venta/ver-venta.component';

const routes: Routes = [
  {path:'automoviles', component: AutomovilesComponent},
  {path:'publicaciones', component: PublicacionesComponent},
  {path:'ventas', component: VentasComponent},
  {path:'ver-automovil/:id', component: VerAutomovilesComponent},
  {path:'crear-automovil', component: CrearAutomovilesComponent},
  {path:'editar-automovil/:id', component: ActualizarAutomovilesComponent},
  {path:'buscar-patente/:patente', component: BusquedaPatenteComponent},
  {path:'crear-publicacion', component: CrearPublicacionComponent},
  {path:'ver-venta/:id', component: VerVentaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
