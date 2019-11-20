import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBodyPageComponent } from './teacher-body-page.component';

describe('TeacherBodyPageComponent', () => {
  let component: TeacherBodyPageComponent;
  let fixture: ComponentFixture<TeacherBodyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherBodyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherBodyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
