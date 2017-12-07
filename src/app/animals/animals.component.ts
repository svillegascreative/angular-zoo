import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ANIMALS } from '../mock-animals';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})

export class AnimalsComponent implements OnInit {

  animals = ANIMALS;
  // selectedAnimal = Animal;

  constructor() { }

  ngOnInit() {
  }

  onSelect(animal: Animal): void {
    this.selectedAnimal = animal;
  }

}
