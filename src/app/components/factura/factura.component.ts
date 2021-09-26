import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacturaService } from "../../services/factura.service";


@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  forma:FormGroup;
  idFactura:number;

  productosTodo:any[]=[];
  clientes:any[]=[];
  producto:[]=[];


  precioProdSelec:number;
  productoFila:any=[
    {
      idProducto:20,
      descripcion:'Chucula',
      cantidad:12,
      precioU:5000
    },

    {
      idProducto:50,
      descripcion:'Bolsa de pan x12',
      cantidad:1,
      precioU:2000
    }
  ];





  constructor( private fb: FormBuilder,
               private facturaService:FacturaService ) {

                this.crearFormulario();
               
                }

  ngOnInit() {

    this.getId();

    this.productosTodo= this.facturaService.getProductos();
    this.clientes = this.facturaService.getClientes();
    console.log("productos", this.productosTodo);
    console.log("clientes", this.clientes);
    
  }

  

  

  crearFormulario(){

    this.forma = this.fb.group({

      numFactura:[this.idFactura,],
      fecha:['',''],
      cliente:['',,''],

      idProducto:[],
      descripcion:[],
      cantidad:[],
      precioU:[]



    })
  }


  getId(){

    this.idFactura= this.facturaService.numFactura;

  }



  guardar(){

  }

  agregar(){

    console.log(this.forma);
    
  }

  cargarPrecio(event){
  //console.log(event.value);
  
  let indice = parseInt(event.value)-1; 
  
  console.log(this.productosTodo[indice].precioU);

  this.precioProdSelec=this.productosTodo[indice].precioU;

  }




}
