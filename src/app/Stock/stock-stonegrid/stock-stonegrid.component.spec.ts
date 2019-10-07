import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockStonegridComponent } from './stock-stonegrid.component';

describe('StockStonegridComponent', () => {
  let component: StockStonegridComponent;
  let fixture: ComponentFixture<StockStonegridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockStonegridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockStonegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
