import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrderHeaderComponent } from './view-order-header.component';

describe('ViewOrderHeaderComponent', () => {
  let component: ViewOrderHeaderComponent;
  let fixture: ComponentFixture<ViewOrderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewOrderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOrderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
