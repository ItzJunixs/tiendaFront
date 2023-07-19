import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoURL = 'http://localhost:8080/productos/'

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + "listarProductos");
  }

  public listarPorId(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detallesProductoId/${id}`);
  }

  public listarPorNombre(nombre: string): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detallesProductoNombre/${nombre}`);
  }

  public crear(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + "crearProducto", producto);
  }

  public actualizar(id: number, producto: Producto): Observable<any>{
    return this.httpClient.put<any>(this.productoURL + `actualizarProducto/${id}`, producto);
  }

  public eliminar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `eliminarProducto/${id}`);
  }
}
