import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DslInputComponent } from './dsl-input.component';

describe('DslInputComponent', () => {
  let component: DslInputComponent;
  let fixture: ComponentFixture<DslInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DslInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DslInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
