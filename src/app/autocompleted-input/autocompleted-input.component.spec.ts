import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletedInputComponent } from './autocompleted-input.component';

describe('AutocompletedInputComponent', () => {
  let component: AutocompletedInputComponent;
  let fixture: ComponentFixture<AutocompletedInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletedInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutocompletedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
