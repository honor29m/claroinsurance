import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaComponent } from './components/consulta/consulta.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';

const appRoutes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'consulta', component: ConsultaComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);