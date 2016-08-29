import { Injectable } from '@angular/core';
import {HEROES} from "../mock-heros";
import {Hero} from "../classes/hero";

@Injectable()
export class HeroService {

  constructor() { }

  getHeroes(): Promise<Hero[]> {

    // return HEROES;
    return Promise.resolve(HEROES);
  }
}
