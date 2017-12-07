import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Animal } from './animal';
import { ANIMALS } from './mock-animals';

@Injectable()
export class AnimalService {

  constructor() { }

  getAnimals(): Observable<Animal[]> {
    return of(ANIMALS);
  }

}
