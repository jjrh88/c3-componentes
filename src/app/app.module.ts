import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NotasComponent } from './component/notas/notas.component';
import { FormularioComponent } from './component/formulario/formulario.component';
import { MenuComponent } from './component/menu/menu.component';
import { ListadoComponent } from './component/listado/listado.component';
import { TestComponent } from './component/test/test.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ServiceComponent } from './component/service/service.component';
import { EstadisticasComponent } from './component/estadisticas/estadisticas.component';
import { FeatureComponent } from './component/feature/feature.component';
import { TeamComponent } from './component/team/team.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { CallComponent } from './component/call/call.component';
import { ContactComponent } from './component/contact/contact.component';
import { AdminComponent } from './component/admin/admin.component';
import { InitComponent } from './component/init/init.component';
import { AmdContactComponent } from './component/amd-contact/amd-contact.component';
import { UploadComponent } from './component/upload/upload.component';

/**/
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotasComponent,
    FormularioComponent,
    MenuComponent,
    ListadoComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    ServiceComponent,
    EstadisticasComponent,
    FeatureComponent,
    TeamComponent,
    PricingComponent,
    TestimonialComponent,
    CallComponent,
    ContactComponent,
    AdminComponent,
    InitComponent,
    AmdContactComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
