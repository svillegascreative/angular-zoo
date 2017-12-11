import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Animal } from './animal';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class AnimalService {

  private animalsUrl = 'api/animals';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.animalsUrl)
      .pipe(
        tap(animals => this.log('So many animals to see!')),
        catchError(this.handleError('getAnimals', []))
      );
  }

  getAnimal(id: number): Observable<Animal> {
    const url = `${this.animalsUrl}/${id}`;
    return this.http.get<Animal>(url)
      .pipe(
        tap(_ => this.log(`Visited animal #${id}!`)),
        catchError(this.handleError<Animal>(`getAnimal(id=${id})`))
      );
  }

  updateAnimal(animal: Animal): Observable<any> {
    return this.http.put(this.animalsUrl, animal, httpOptions)
      .pipe(
        tap(_ => this.log(`Updated animal id=${animal.id}`)),
        catchError(this.handleError<any>('updateAnimal'))
      );
  }

  addAnimal(newAnimal: Animal): Observable<Animal> {
    return this.http.post(this.animalsUrl, newAnimal, httpOptions)
      .pipe(
        tap((newAnimal: Animal) => this.log(`Added ${newAnimal.name_common}`)),
        catchError(this.handleError<Hero>('addAnimal'))
      )
  }

  deleteAnimal( animal: Animal | number): Observable<Animal> {
    const id = typeof animal === 'number' ? animal : animal.id;
    const url = `${this.animalsUrl}/${id}`;

    return this.http.delete<Animal>(url, httpOptions).
      pipe(
        tap(_ => this.log(`deleted animal id=${id}`)),
        catchError(this.handleError<Animal>('deleteAnimal'))
      );
  }

  private log(message: string) {
    this.messageService.add('AnimalService: ' + message);
  }

  private handleError<T> (operation: 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

}
