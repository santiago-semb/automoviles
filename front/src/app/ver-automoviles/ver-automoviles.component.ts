import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AutomovilService } from '../service/automovil.service';
import { MarcaService } from '../service/marca.service';
import { ModeloService } from '../service/modelo.service';

@Component({
  selector: 'app-ver-automoviles',
  templateUrl: './ver-automoviles.component.html',
  styleUrls: ['./ver-automoviles.component.css']
})
export class VerAutomovilesComponent implements OnInit {
  patente: string;
  modelo: string;
  marca: string;
  precio: number;
  color: string;
  img: string;
  imgAuto: string;
  constructor(private activatedRoute: ActivatedRoute, private autoService: AutomovilService, private marcaService: MarcaService, private modeloService: ModeloService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params['id'].toString();
      this.autoService.getAutomovil(id).subscribe(data => {
        this.patente = data.patente;
        this.modelo = data.modelo;
        this.marca = data.marca;
        this.precio = data.precio;
        this.color = data.color;
        this.marcaService.getMarcaByName(this.marca).subscribe(data => {
          this.img = data.img;
        });
        this.modeloService.getModeloByName(this.modelo).subscribe(data => {
          this.imgAuto = data.img;
        })
      });     
    })
  }

}
