import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marca } from '../model/marca.model';
import { MarcaService } from '../service/marca.service';

@Component({
  selector: 'app-crear-marca',
  templateUrl: './crear-marca.component.html',
  styleUrls: ['./crear-marca.component.css']
})
export class CrearMarcaComponent {

  constructor(private marcaService: MarcaService, private router: Router) { }

  crearMarca(nombre:string,img:string){
    let marca = new Marca(nombre,img);
    this.marcaService.crearMarca(marca).subscribe();
    this.router.navigate(['base-de-datos']);
  }

}
