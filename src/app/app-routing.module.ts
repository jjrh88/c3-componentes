import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AmdContactComponent } from './component/amd-contact/amd-contact.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { InitComponent } from './component/init/init.component';
import { ListadoComponent } from './component/listado/listado.component';
import { LoginComponent } from './component/login/login.component';
import { NotasComponent } from './component/notas/notas.component';
import { RegisterComponent } from './component/register/register.component';
import { TestComponent } from './component/test/test.component';
import { UploadComponent } from './component/upload/upload.component';

//Definir las rutas de nuestra aplicación
const routes: Routes = [
  {
    path:'admin', component: AdminComponent,
    children:[
      { path:'contactos', component: AmdContactComponent }
    ]
  },
  { 
    path: 'formulario', component: FormularioComponent,
    children:[
      { path: 'listado', component: ListadoComponent,
       children:[
         { path: 'test', component: TestComponent }
      ]
     },
      { path: 'register', component: RegisterComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'notas', component: NotasComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'inicio', component: InitComponent },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
