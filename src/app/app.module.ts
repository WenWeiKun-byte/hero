import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail';
import {HeroService} from "./services/hero.service";
import { HeroListComponent } from './hero-list/hero-list.component';
import {routing} from "./app.routing";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent
  ],
  imports: [
    routing,
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [HeroService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
