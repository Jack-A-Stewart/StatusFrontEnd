import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseStatusBooleanComponent } from './course-status-boolean.component';

describe('CourseStatusBooleanComponent', () => {
  let component: CourseStatusBooleanComponent;
  let fixture: ComponentFixture<CourseStatusBooleanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseStatusBooleanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseStatusBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
