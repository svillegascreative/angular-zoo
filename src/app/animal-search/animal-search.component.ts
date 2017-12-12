import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-search',
  templateUrl: './animal-search.component.html',
  styleUrls: ['./animal-search.component.scss']
})

export class AnimalSearchComponent implements OnInit {

  animals$: Observable<Animal[]>;
  private searchTerms = new Subject<string>();

  constructor(private animalService: AnimalService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.animals$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap( (term: string) => this.animalService.searchAnimals(term)),
    );
  }

}
