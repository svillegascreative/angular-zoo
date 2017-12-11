import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})

export class AnimalsComponent implements OnInit {

  animals: Animal[];

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalService.getAnimals()
        .subscribe(animals => this.animals = animals)
  }

  add(commonName: string, sciName: string, indivName?: string, image?: string, descriptor?: string): void {
    const newAnimal = {
      name_common: commonName.trim(),
      name_sci: sciName.trim(),
      name: indivName.trim(),
      image: image.trim(),
      descriptor: descriptor.trim()
    }
    if (!newAnimal.name_common && !newAnimal.name_sci) {
      return
    }
    this.animalService.addAnimal(newAnimal as Animal)
      .subscribe(animal => this.animals.push(newAnimal as Animal));
  }

}
