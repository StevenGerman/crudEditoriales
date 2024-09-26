import { Component } from '@angular/core';

import { OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-editar',
  templateUrl: './editorial-editar.component.html',
  styleUrls: ['./editorial-editar.component.css']
})
export class EditorialEditarComponent implements OnInit {

  formularioEditoriales: FormGroup;

  idEditorial:any;


  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private servicioEditoriales:EditorialService,
    public ruteador:Router

  ){

    this.idEditorial = activeRoute.snapshot.paramMap.get('id');
    console.log(this.idEditorial);

    this.servicioEditoriales.ObtenerEditorial(this.idEditorial).subscribe((respuesta)=>{
      console.log(respuesta);
      this.formularioEditoriales.setValue({
        ediNombre:respuesta[0]['ediNombre'],
        ediDireccion:respuesta[0]['ediDireccion'],
        ediTelefono:respuesta[0]['ediTelefono'],
        ediEmail:respuesta[0]['ediEmail'],
        LocalidadID:respuesta[0]['LocalidadID']
      })
      
    });

    this.formularioEditoriales = this.formulario.group({
      ediNombre:[''],
      ediDireccion:[''],
      ediTelefono:[''],
      ediEmail:[''],
      LocalidadID:['']
    });

  }

  ngOnInit(): void {
    
  }

  enviarDatos(){

  }

}
