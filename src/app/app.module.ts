import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlatformComponent } from './platform/platform.component';
import { DemoPipe } from './demo.pipe';
import { LogMeDirective } from './log-me.directive';

@NgModule({
  declarations: [
    AppComponent,
    PlatformComponent,
    // LogMeDirective,
    // DemoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
