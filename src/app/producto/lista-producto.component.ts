import { Component } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent {

  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productoService.listar().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.productoService.eliminar(id).subscribe(
      data => {
        this.toastr.success('Producto eliminado', 'OK', {
          timeOut: 3000
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000
        });
      }
    );
  }
}
