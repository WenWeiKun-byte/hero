import { Component, OnInit } from '@angular/core';
import {Hero} from "../classes/hero";
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-hero-list',
  templateUrl: 'hero-list.component.html',
  styleUrls: ['hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() {
    this.getHeroes();
  }

}
