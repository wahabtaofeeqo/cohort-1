import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';
import { demoGuard } from './demo.guard';

const routes: Routes = [
  {
    path: '',
    component: PlatformComponent
  },

  { 
    path: 'home', 
    canActivate: [demoGuard],
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
