import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlistBiComponent } from './orderlist-bi.component';

describe('OrderlistBiComponent', () => {
  let component: OrderlistBiComponent;
  let fixture: ComponentFixture<OrderlistBiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderlistBiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlistBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
