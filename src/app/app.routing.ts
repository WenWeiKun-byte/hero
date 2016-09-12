/**
 * Created by root on 1/9/16.
 */
import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";


const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroListComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
