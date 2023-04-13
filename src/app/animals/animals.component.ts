import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { parse, RegexMatch } from './parser';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {

  parseString(inputString: string) {
    const parseResult = parse(inputString);
    console.debug("parsed result:", parseResult);
    if (!parseResult.ast) {
      if (parseResult.errs && parseResult.errs.length) {
        return (parseResult.errs[0].expmatches.map(a => {console.log(a); return a;}).map(
          (l) => (l as RegexMatch).literal
        )).filter((wert) => wert !== ' ' && wert !== '[a-z]+').map( s => s.replace("\\", ""));
      }
    }
    return [];
  }
}
