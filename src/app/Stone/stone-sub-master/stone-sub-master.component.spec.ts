import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoneSubMasterComponent } from './stone-sub-master.component';

describe('StoneSubMasterComponent', () => {
  let component: StoneSubMasterComponent;
  let fixture: ComponentFixture<StoneSubMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoneSubMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoneSubMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
