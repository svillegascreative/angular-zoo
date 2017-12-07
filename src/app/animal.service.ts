import { Injectable } from '@angular/core';
import { Animal } from './animal';
import { ANIMAL } from './mock-animals';

@Injectable()
export class AnimalService {

  constructor() { }

  getAnimals(); Animal[] {
    return ANIMALS;
  }

}
