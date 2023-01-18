import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Publicacion } from '../model/publicacion.model';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:8080/publicacion/";

  public getPublicaciones(): Observable<Publicacion> {
    return this.httpClient.get<Publicacion>(this.url + "traer");
  }
  public getPublicacion(id:number): Observable<Publicacion> {
    return this.httpClient.get<Publicacion>(this.url + "traer/" + id);
  }
  public getPublicacionByAutomovil(automovil:string): Observable<Publicacion> {
    return this.httpClient.get<Publicacion>(this.url + "get/" + automovil);
  }
  public crearPublicacion(publicacion:Publicacion): Observable<Publicacion> {
    return this.httpClient.post<Publicacion>(this.url + "crear", publicacion);
  }
  public eliminarPublicacion(id:number): Observable<Publicacion> {
    return this.httpClient.delete<Publicacion>(this.url + "eliminar/" + id);
  }

}
