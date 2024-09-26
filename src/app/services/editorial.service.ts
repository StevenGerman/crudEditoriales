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

  AgregarEditorial(datosEditorial:Editorial):Observable<any>{
    return this.clienteHttp.post(this.API,datosEditorial);
  }

  
  BorrarEditorial(id:any){
    return this.clienteHttp.delete(`https://escuelasagarna.com/APIBiblioteca/editorial.php?idEditorial=${id}`);
  }
  ObtenerEditorial(id:any):Observable<any>{
    return this.clienteHttp.get(`https://escuelasagarna.com/APIBiblioteca/editorial.php?idEditorial=${id}`);
  }  



  EditarEmpleado(idEditorial:any,datosEditorial:Editorial):Observable<any>{
    return this.clienteHttp.put(`https://escuelasagarna.com/APIBiblioteca/editorial.php?idEditorial=${idEditorial}`,datosEditorial);
  }


}
