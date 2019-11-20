import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyStudentPageComponent } from './body-student-page.component';

describe('BodyStudentPageComponent', () => {
  let component: BodyStudentPageComponent;
  let fixture: ComponentFixture<BodyStudentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyStudentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyStudentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
