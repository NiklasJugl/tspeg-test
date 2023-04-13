import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  OnDestroy,
  HostBinding,
  Optional,
  Self,
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs/internal/Subject';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-antlr-autocomplete',
  templateUrl: './antlr-autocomplete.component.html',
  styleUrls: ['./antlr-autocomplete.component.css'],
})
export class AntlrAutocompleteComponent {
  static nextId = 0;

  options: string[] = [];
  currentValue = '';


  @ViewChild('antlrAutoInput') autoInput!: ElementRef;
  cursorPosition = 0;

  @Input()
  parseString!: (inputString: string) => string[];


  updateCuror() {
    this.cursorPosition = this.autoInput.nativeElement.selectionStart;
  }

  input(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    console.debug('input called', newValue, arguments);

    this.currentValue = newValue;
    console.debug(
      'new options:',
      this.parseString(newValue.substring(0, this.cursorPosition))
    );
    this.options = this.parseString(newValue.substring(0, this.cursorPosition));
  }

  autocompleted(event: MatAutocompleteSelectedEvent) {
    console.debug(
      'autocompleted called',
      this.autoInput.nativeElement.value,
      arguments
    );
    const currentValue = event.option.value;

    // Substring before the cursor (will be partially replaced, if we have n)
    const pre = this.currentValue.substring(0, this.cursorPosition);
    const preIndex = pre.lastIndexOf(' ');
    const preTrimmed = pre.substring(0, preIndex);

    const post = this.currentValue.substring(this.cursorPosition);
    const postIndex = post.indexOf(' ');
    const postTrimmed = post.substring(postIndex);

    this.currentValue = `${preTrimmed} ${currentValue} ${postTrimmed}`.trim();

    console.debug(pre, preIndex, preTrimmed, post, postIndex, postTrimmed);
    this.autoInput.nativeElement.value = this.currentValue;
    console.debug('correcting input value:', this.currentValue);
  }

}
