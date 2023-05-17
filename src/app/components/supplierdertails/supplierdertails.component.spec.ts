import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierdertailsComponent } from './supplierdertails.component';

describe('SupplierdertailsComponent', () => {
  let component: SupplierdertailsComponent;
  let fixture: ComponentFixture<SupplierdertailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierdertailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplierdertailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
