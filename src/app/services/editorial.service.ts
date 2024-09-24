import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Editorial } from './Editorial.model';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  API: string = 'https://escuelasagarna.com/APIBiblioteca/editorial.php';

  constructor(private clienteHttp:HttpClient) { }

  ObtenerEditoriales(){
    return this.clienteHttp.get(this.API);
  }



}
