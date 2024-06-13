import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../pages/login/login.component';

import { NoveraProjectRoutingModule } from './novera-project-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NoveraProjectRoutingModule,
    LoginComponent
  ]
})
export class NoveraProjectModule { }
