import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { Producto } from '../models/producto';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit{

  id = 0;
  nombre = '';
  precio = 0;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(){

  }

  onCreate(): void {
    const producto = new Producto(this.id, this.nombre, this.precio);
    this.productoService.crear(producto).subscribe(
      data => {
        this.toastr.success('Producto creado', 'OK', {
          timeOut: 3000
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000
        });
      }
    )
  }
}
