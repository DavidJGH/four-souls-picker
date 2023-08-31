import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDisplayComponent } from './char-display.component';

describe('CharDisplayComponent', () => {
  let component: CharDisplayComponent;
  let fixture: ComponentFixture<CharDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
