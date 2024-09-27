import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms';

import { EditorialService } from 'src/app/services/editorial.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-editorial-agregar',
  templateUrl: './editorial-agregar.component.html',
  styleUrls: ['./editorial-agregar.component.css']
})
export class EditorialAgregarComponent implements OnInit {

  formularioEditoriales: FormGroup;

  constructor(
    private servicioEditoriales:EditorialService,
    public formulario: FormBuilder,
    private ruteador:Router

  ){

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

  enviarDatos():any{ 
    
    console.log(this.formularioEditoriales.value);
    this.servicioEditoriales.AgregarEditorial(this.formularioEditoriales.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/listar-editorial');
    });

    
  }


}
