import { Component, Input, OnInit } from '@angular/core';
import { parse, RegexMatch } from '../animals/parser';


@Component({
  selector: 'app-dsl-input',
  templateUrl: './dsl-input.component.html',
  styleUrls: ['./dsl-input.component.css']
})
export class DslInputComponent implements OnInit {

  parsingOutput = "";
  constructor() { }

  ngOnInit(): void {
  }

  parse(event: Event){
    const parseResult = parse((event.target as HTMLInputElement).value);
    console.debug("parsed result:", parseResult);
    this.parsingOutput =   JSON.stringify(parseResult);
  }
}
