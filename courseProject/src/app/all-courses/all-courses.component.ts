import { Component } from '@angular/core';
import { Course } from '../entities/course.model';
import { CourseService } from '../services/courses.service';
import { CourseDetailsComponent } from '../course-details/course-details.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { EditCourseComponent } from '../edit-course/edit-course.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Category } from '../entities/category.model';
import { CategoryService } from '../services/category.service';
import {MiniCourseDetailsComponent} from '../mini-course-details/mini-course-details.component'

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CourseDetailsComponent, CommonModule, EditCourseComponent, ReactiveFormsModule, MiniCourseDetailsComponent],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent {
  public courses: Course[] = [];
  public filteredCourses: Course[] = [];
  public categories: Category[] = [];
  public filterForm!: FormGroup;
  public isLecturer!:boolean;

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private courseService: CourseService
  ) { }

  ngOnInit() {
    this.filterForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      learningWay: new FormControl(''),
    });
  
    this.subscribeToFormChanges();
  
    this.categoryService.getCategories().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (err) => { console.error(err); }
    });
  
    this.courseService.getCourses().subscribe({
      next: (res) => {
        this.courses = res;
        this.filter();
      },
      error: (err) => { console.error(err); }
    });
  
    if (typeof window !== 'undefined' && typeof sessionStorage !== 'undefined') {
      this.isLecturer = sessionStorage.getItem('isLecturer') === 'true';
    } else {
      this.isLecturer = false;
    }
  }  

  private subscribeToFormChanges() {
    this.filterForm.valueChanges.subscribe(() => {
      this.filter();
    });
  }

  filter() {
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(this.filterForm.controls['name'].value.toLowerCase()) &&
      (this.filterForm.controls['category'].value === '' || course.categoryId == this.filterForm.controls['category'].value) &&
      (this.filterForm.controls['learningWay'].value === '' || course.learningWay == this.filterForm.controls['learningWay'].value)
    );
  }

  goAdd() {
    this.router.navigate(['/addCourse']);
  }
}
