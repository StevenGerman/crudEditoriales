import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorialEditarComponent } from './components/editorial-editar/editorial-editar.component';
import { EditorialListarComponent } from './components/editorial-listar/editorial-listar.component';
import { EditorialAgregarComponent } from './components/editorial-agregar/editorial-agregar.component';

const routes: Routes = [

  {path: '', pathMatch: 'full', redirectTo: 'agregar-empleado'},
  {path: 'agregar-editorial',component: EditorialAgregarComponent},
  {path: 'listar-editorial',component: EditorialListarComponent},
  {path: 'editar-editorial/:id',component: EditorialEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
