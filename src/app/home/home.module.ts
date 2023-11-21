import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './components/child/child.component';
import { DemoPipe } from '../demo.pipe';
import { LogMeDirective } from '../log-me.directive';

@NgModule({
  declarations: [
    HomeComponent,
    ChildComponent,
    DemoPipe,
    LogMeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
