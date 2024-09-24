import { Component, OnInit } from '@angular/core';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial-listar',
  templateUrl: './editorial-listar.component.html',
  styleUrls: ['./editorial-listar.component.css']
})
export class EditorialListarComponent implements OnInit {

  Editoriales:any;


  constructor(private servicioEditoriales:EditorialService){}

  ngOnInit(): void {
    this.servicioEditoriales.ObtenerEditoriales().subscribe((respuesta) =>{
      console.log(respuesta);
      this.Editoriales= respuesta;
    });
  }




}
