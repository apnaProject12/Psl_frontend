import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertoryComponent } from './invertory.component';

describe('InvertoryComponent', () => {
  let component: InvertoryComponent;
  let fixture: ComponentFixture<InvertoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
