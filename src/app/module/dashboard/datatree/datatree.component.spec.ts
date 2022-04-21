import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatreeComponent } from './datatree.component';

describe('DatatreeComponent', () => {
  let component: DatatreeComponent;
  let fixture: ComponentFixture<DatatreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
