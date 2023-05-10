import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertoryInComponent } from './invertory-in.component';

describe('InvertoryInComponent', () => {
  let component: InvertoryInComponent;
  let fixture: ComponentFixture<InvertoryInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertoryInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertoryInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
