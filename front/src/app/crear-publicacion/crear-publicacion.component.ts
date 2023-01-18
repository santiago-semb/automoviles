import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from '../model/modelo.model';
import { Publicacion } from '../model/publicacion.model';
import { ModeloService } from '../service/modelo.service';
import { PublicacionService } from '../service/publicacion.service';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.css']
})
export class CrearPublicacionComponent implements OnInit {
  automovil:string;
  precio:number;
  descripcion:string;
  color:string;
  motor:string;
  kilometros:number;
  modelo:string;
  telefono:string;
  email:string;  
  masInfoDeContacto:string;

  modelos: Modelo[] = [];

  constructor(private router:Router, private publiService: PublicacionService, private modeloService: ModeloService) { }


  ngOnInit(): void {
    this.modeloService.getModelos().subscribe(data => {
      let todosLosModelos = [];
      for(let i=0; i<200; i++){
        if(data[i] != undefined)
        todosLosModelos.push(data[i]);
      }
      for(let i=0; i<todosLosModelos.length;i++){
        this.modelos.push(data[i]);
      }
    })
  }

  onSubmit(){
    if(this.masInfoDeContacto == null){
      this.masInfoDeContacto = "El vendedor no tiene otros medios de contacto.";
    }
    let publicacion = new Publicacion(this.automovil,this.precio,this.descripcion,this.color,this.motor,this.kilometros,this.modelo,this.telefono,this.email,this.masInfoDeContacto);
    this.publiService.crearPublicacion(publicacion).subscribe();
    alert("Se ha creado la publicacion.");
    this.router.navigate(['publicaciones']);
  }

}
