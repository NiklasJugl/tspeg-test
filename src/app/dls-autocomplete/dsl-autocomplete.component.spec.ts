import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntlrAutocompleteComponent } from './dsl-autocomplete.component';

describe('AntlrAutocompleteComponent', () => {
  let component: AntlrAutocompleteComponent;
  let fixture: ComponentFixture<AntlrAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntlrAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntlrAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
