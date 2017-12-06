import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})

export class AnimalsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animal: Animal {
    id: 1,
    name: 'Rolly',
    name_common: 'nine-banded armadillo',
    name_sci: 'Dasypus novemcinctus',
    descriptor: 'magnificent';
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Nine-banded_Armadillo_%28280204298%29.jpg'
  }

}
