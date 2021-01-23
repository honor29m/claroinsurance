import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MenuComponent } from './components/menu/menu.component';
import { ErrorComponent } from './components/error/error.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConsultaComponent,
    RegistroComponent,
    MenuComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
