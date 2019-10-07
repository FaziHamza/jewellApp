import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneMasterComponent } from './stone-master.component';

describe('StoneMasterComponent', () => {
  let component: StoneMasterComponent;
  let fixture: ComponentFixture<StoneMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoneMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
