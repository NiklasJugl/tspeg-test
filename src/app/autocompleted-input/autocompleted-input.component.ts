import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocompleted-input',
  templateUrl: './autocompleted-input.component.html',
  styleUrls: ['./autocompleted-input.component.css']
})
export class AutocompletedInputComponent {

  parseString(inputString: string) {
    return ["Owl","Cat", "Dog"];
  }
}
