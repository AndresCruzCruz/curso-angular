import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageDBZComponent } from './pages/main-page.component';
import { ListDBZComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainPageDBZComponent,
    ListDBZComponent,
    AddCharacterComponent
  ],
  exports: [
    MainPageDBZComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
