import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Marca } from '../model/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private httpClient: HttpClient) { }

  url = "https://conse.onrender.com/marca/";

  public getMarcas(): Observable<Marca> {
    return this.httpClient.get<Marca>(this.url + "traer");
  }

  public getMarcaById(id: number): Observable<Marca> { 
    return this.httpClient.get<Marca>(this.url + "traer/" + id);
  }

  public getMarcaByName(nombreMarca: string): Observable<Marca> {
    return this.httpClient.get<Marca>(this.url + "get/" + nombreMarca);
  }

  public crearMarca(marca: Marca): Observable<Marca> {
    return this.httpClient.post<Marca>(this.url + "crear", marca);
  }

  public eliminarMarca(id: number): Observable<Marca> {
    return this.httpClient.delete<Marca>(this.url + "eliminar/" + id);
  }


}
