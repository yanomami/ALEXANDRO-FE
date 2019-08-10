import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderHeaderComponent } from './list-order-header.component';

describe('ListOrderHeaderComponent', () => {
  let component: ListOrderHeaderComponent;
  let fixture: ComponentFixture<ListOrderHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrderHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
