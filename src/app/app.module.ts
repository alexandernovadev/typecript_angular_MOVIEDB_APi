import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// Para utulizar ng model falta esto siempre
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Rutas
import { APP_ROUTING } from './app.routes';

import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PipeimagenPipe } from './pipes/pipeimagen.pipe';
import { GaleriasComponent } from './components/galerias/galerias.component';
import { ProductorPipe } from './pipes/productor.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuscarComponent,
    NavbarComponent,
    PeliculaComponent,
    PipeimagenPipe,
    GaleriasComponent,
    ProductorPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
