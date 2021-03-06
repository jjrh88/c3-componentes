import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AmdContactComponent } from './component/amd-contact/amd-contact.component';
import { ContabilidadComponent } from './component/contabilidad/contabilidad.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { InitComponent } from './component/init/init.component';
import { InventarioComponent } from './component/inventario/inventario.component';
import { ListadoComponent } from './component/listado/listado.component';
import { LoginComponent } from './component/login/login.component';
import { NotasComponent } from './component/notas/notas.component';
import { ObserverComponent } from './component/observer/observer.component';
import { RegisterComponent } from './component/register/register.component';
import { TestComponent } from './component/test/test.component';
import { UploadComponent } from './component/upload/upload.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { AuthGuard } from './guards/auth.guard';

//Definir las rutas de nuestra aplicación
const routes: Routes = [
  {
    path:'admin', component: AdminComponent, canActivate: [ AuthGuard ],
    children:[
      { path:'contactos', component: AmdContactComponent },
      { path:'contabilidad', component: ContabilidadComponent },
      { path:'inventario', component: InventarioComponent },
      { path:'usuarios', component: UsuariosComponent }
    ]
  },
  { 
    path: 'formulario', component: FormularioComponent, canActivate: [ AuthGuard ],
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
  { path: 'observador', component: ObserverComponent },
  { path: 'notas', component: NotasComponent },
  { 
    path: 'upload', component: UploadComponent, canActivate: [ AuthGuard ]
  },
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
