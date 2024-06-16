import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienQuiereSerComponent } from './quien-quiere-ser.component';

describe('QuienQuiereSerComponent', () => {
  let component: QuienQuiereSerComponent;
  let fixture: ComponentFixture<QuienQuiereSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuienQuiereSerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuienQuiereSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
