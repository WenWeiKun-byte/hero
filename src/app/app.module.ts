import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail';
import {HeroService} from "./services/hero.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
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
