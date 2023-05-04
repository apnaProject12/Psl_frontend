import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryOutItemComponent } from './inventory-out-item.component';

describe('InventoryOutItemComponent', () => {
  let component: InventoryOutItemComponent;
  let fixture: ComponentFixture<InventoryOutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryOutItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InventoryOutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
