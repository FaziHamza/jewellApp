import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasaRateListComponent } from './pasa-rate-list.component';

describe('PasaRateListComponent', () => {
  let component: PasaRateListComponent;
  let fixture: ComponentFixture<PasaRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasaRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasaRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
