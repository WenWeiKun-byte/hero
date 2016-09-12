import {Component, OnInit} from '@angular/core';
import {HeroSearchService} from "../services/hero-search.service";
import {Hero} from "../classes/hero";
import {Observable, Subject} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();


  constructor(private heroSearchService: HeroSearchService,
              private router: Router) {
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  //A Subject is a producer of an observable event stream; searchTerms produces an Observable of strings, the filter criteria for the name search.
  //Each call to search puts a new string into this subject's observable stream by calling next.


  // A Subject is also an Observable.
  // We're going to turn the stream of search terms into a stream of Hero arrays and assign the result to the heroes property.
  ngOnInit() {
    this.heroes = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.heroSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Hero[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
  }
//switchMap calls our search service for each search term that makes it through the debounce and distinctUntilChanged gauntlet.
// It cancels and discards previous search observables, returning only the latest search service observable.


  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }

}
