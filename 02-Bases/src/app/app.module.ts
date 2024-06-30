import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { ContadorModule } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule, //Aqui se importa los modulos que vamos a utilizar sin modificar el module principal
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
