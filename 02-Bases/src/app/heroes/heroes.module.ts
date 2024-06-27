import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule ({
    declarations: [ //Componentes que contiene este modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Que cosas son visibles afuera de este modulo
        ListadoComponent
    ], 
    imports: [ // Aqui van todos los modulos
        CommonModule // Es importante ya que contiene las directivas de angular (NGIF, NGFOR)
    ]
})
export class HeroesModule { }