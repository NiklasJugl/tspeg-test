import { Component } from '@angular/core';

@Component({
  selector: 'app-select-animal',
  templateUrl: './select-animal.component.html',
  styleUrls: ['./select-animal.component.css'],
})
export class SelectAnimalComponent {
  animals = ['Shark', 'Crow', 'Bug'];
}
