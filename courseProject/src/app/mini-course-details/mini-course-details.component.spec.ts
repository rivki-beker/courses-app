import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCourseDetailsComponent } from './mini-course-details.component';

describe('MiniCourseDetailsComponent', () => {
  let component: MiniCourseDetailsComponent;
  let fixture: ComponentFixture<MiniCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCourseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
