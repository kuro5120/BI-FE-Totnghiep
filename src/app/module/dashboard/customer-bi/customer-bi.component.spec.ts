import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBIComponent } from './customer-bi.component';

describe('CustomerBIComponent', () => {
  let component: CustomerBIComponent;
  let fixture: ComponentFixture<CustomerBIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
