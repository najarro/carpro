import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CochesComponent } from './coches/coches.component';
import { FooterComponent } from './footer/footer.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CocheClickedService } from './shared/coche-clicked.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { CochedetalleComponent } from './cochedetalle/cochedetalle.component';
import { ServiceWorkerModule } from '@angular/service-worker';

const rutas:Routes = [
  {path:'listado-coches', component: CochesComponent},
  {path:'', component: InicioComponent, pathMatch: 'full'},
  {path:'**', redirectTo: '/'}
]

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CochesComponent,
    FooterComponent,
    CabeceraComponent,
    CochedetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    CocheClickedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
