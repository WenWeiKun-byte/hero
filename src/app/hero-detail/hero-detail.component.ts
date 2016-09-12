import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../classes/hero";
import {HeroService} from "../services/hero.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private heroService: HeroService,
              private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      //The hero id is a number. Route parameters are always strings. So we convert the route parameter value to a number with the JavaScript (+) operator.
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    })
  }

  goBack(): void {
    window.history.back();
  }

  @Input()
  hero: Hero;
}
