import { Component, OnInit } from '@angular/core';

import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  animals: Animal[] = [];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals.slice(1, 5));
  }

}
