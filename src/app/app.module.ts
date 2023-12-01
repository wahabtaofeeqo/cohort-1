import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformComponent } from './platform/platform.component';
import { DemoPipe } from './demo.pipe';
import { LogMeDirective } from './log-me.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmComponent } from './confirm/confirm.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './app-store/reducers/app-reducer';

@NgModule({
  declarations: [
    AppComponent,
    PlatformComponent,
    ConfirmComponent,
    // LogMeDirective,
    // DemoPipe
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      app: appReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
