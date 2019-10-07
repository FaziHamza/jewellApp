import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimgpurposeComponent } from './testimgpurpose.component';

describe('TestimgpurposeComponent', () => {
  let component: TestimgpurposeComponent;
  let fixture: ComponentFixture<TestimgpurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestimgpurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimgpurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
