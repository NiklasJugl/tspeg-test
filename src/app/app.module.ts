import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule  } from '@angular/material/input';
import {MatSelectModule } from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { AnimalsComponent } from './animals/animals.component';
import { AntlrAutocompleteComponent } from './dls-autocomplete/dsl-autocomplete.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AutocompletedInputComponent } from './autocompleted-input/autocompleted-input.component';
import { SelectAnimalComponent } from './select-animal/select-animal.component';
import { DslInputComponent } from './dsl-input/dsl-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AntlrAutocompleteComponent,
    AutocompleteComponent,
    AutocompletedInputComponent,
    SelectAnimalComponent,
    DslInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule ,
    MatSelectModule,
    MatAutocompleteModule,
    OverlayModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
