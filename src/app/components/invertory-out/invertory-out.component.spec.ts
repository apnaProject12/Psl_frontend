import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertoryOutComponent } from './invertory-out.component';

describe('InvertoryOutComponent', () => {
  let component: InvertoryOutComponent;
  let fixture: ComponentFixture<InvertoryOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertoryOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertoryOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
