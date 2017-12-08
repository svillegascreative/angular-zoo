import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Animal } from './animal';
import { MessageService } from './message.service';

@Injectable()
export class AnimalService {

  private animalsUrl = 'api/animals';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAnimals(): Observable<Animal[]> {
    this.messageService.add('So many animals to see!');
    return this.http.get<Animal[]>(this.animalsUrl);
  }

  getAnimal(id: number): Observable<Animal> {
    this.messageService.add(`Visited animal #${id}!`);
    return of(ANIMALS.find(animal => animal.id === id));
  }

  private log(message: string) {
    this.messageService.add('AnimalService: ' + message);
  }

}
