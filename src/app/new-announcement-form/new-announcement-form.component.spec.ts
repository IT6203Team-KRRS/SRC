import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAnnouncementFormComponent } from './new-announcement-form.component';

describe('NewAnnouncementFormComponent', () => {
  let component: NewAnnouncementFormComponent;
  let fixture: ComponentFixture<NewAnnouncementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAnnouncementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAnnouncementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
