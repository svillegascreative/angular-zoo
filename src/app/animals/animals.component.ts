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
    name_common: 'Nine-banded armadillo',
    name_sci: 'Dasypus novemcinctus',
    descriptor: 'magnificent'
  }

}
