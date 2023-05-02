import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvertoryOutFormComponent } from './invertory-out-form.component';

describe('InvertoryOutFormComponent', () => {
  let component: InvertoryOutFormComponent;
  let fixture: ComponentFixture<InvertoryOutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvertoryOutFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvertoryOutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
