import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestoldComponent } from './testold.component';

describe('TestoldComponent', () => {
  let component: TestoldComponent;
  let fixture: ComponentFixture<TestoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
