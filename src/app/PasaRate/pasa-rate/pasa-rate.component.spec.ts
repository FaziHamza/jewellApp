import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasaRateComponent } from './pasa-rate.component';

describe('PasaRateComponent', () => {
  let component: PasaRateComponent;
  let fixture: ComponentFixture<PasaRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasaRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasaRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
