import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Modelo } from '../model/modelo.model';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  constructor(private httpClient: HttpClient) { }

  url = "https://consesionaria.onrender.com/modelo/";

  public getModelos(): Observable<Modelo> {
    return this.httpClient.get<Modelo>(this.url + "traer");
  }

  public getModeloById(id: number): Observable<Modelo> { 
    return this.httpClient.get<Modelo>(this.url + "traer/" + id);
  }

  public getModeloByName(nombreModelo: string): Observable<Modelo> {
    return this.httpClient.get<Modelo>(this.url + "get/" + nombreModelo);
  }

  public getModeloByMarca(nombreMarca: string): Observable<Modelo> {
    return this.httpClient.get<Modelo>(this.url + "traeme/" + nombreMarca);
  }

  public getModelosByMarca(nombreMarca:string):Observable<Modelo> {
    return this.httpClient.get<Modelo>(this.url + "traerme/" + nombreMarca);
  }

  public crearModelo(modelo: Modelo): Observable<Modelo> {
    return this.httpClient.post<Modelo>(this.url + "crear", modelo);
  }

  public eliminarModelo(id: number): Observable<Modelo> {
    return this.httpClient.delete<Modelo>(this.url + "eliminar/" + id);
  }

}
