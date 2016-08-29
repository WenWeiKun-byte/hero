import {Component, OnInit} from '@angular/core';
import {Hero} from "./classes/hero";
import {HeroService} from "./services/hero.service";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
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

  ngOnInit(): void {
    this.getHeroes();
  }
}
