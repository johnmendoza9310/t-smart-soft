import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor( private http:HttpClient) { }

  numFactura:number=1;
  numCliente:number=1;

  private clientes=[   // la variable es de tipo Heroe como en la interface
    {
      nombre: "John Mendoza",
      id: 1,
      direccion: "brisas de vasconia",
      telefono: "3123807955",
    },
    {
      nombre: "Juan Marin",
      id: 2,
      direccion: "centro",
      telefono: "3215684013",
    }
  ]


  private productos =[
    {
      idProducto:1,
      descripcion:"Chocolate libra",
      precioU:2500
    },

    {
      idProducto:2,
      descripcion:"Arroz libra",
      precioU:1700
    },

    {
      idProducto:3,
      descripcion:"Jugo Hit x litro",
      precioU:1500
    },

    {
      idProducto:4,
      descripcion:"Galleta saltin paquete x 5 tacos",
      precioU:4500
    }
  ]



  getClientes2(){

    return this.http.get("https//local")
  
  }


  getClientes(){

    return this.clientes;
  }

  getProductos(){

    return this.productos;

  }




}
