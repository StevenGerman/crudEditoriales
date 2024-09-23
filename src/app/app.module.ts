import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorialListarComponent } from './components/editorial-listar/editorial-listar.component';
import { EditorialAgregarComponent } from './components/editorial-agregar/editorial-agregar.component';
import { EditorialEditarComponent } from './components/editorial-editar/editorial-editar.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EditorialListarComponent,
    EditorialAgregarComponent,
    EditorialEditarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
