import { Component, Input } from '@angular/core';
import { Course } from '../entities/course.model';
import { Category } from '../entities/category.model';
import { CategoryService } from '../services/category.service';
import { LearningWayIconPipe } from '../learning-way-icon.pipe';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-course-details',
  standalone: true,
  imports: [CommonModule, LearningWayIconPipe],
  templateUrl: './mini-course-details.component.html',
  styleUrls: ['./mini-course-details.component.css']
})
export class MiniCourseDetailsComponent {

  @Input()
  public course!: Course;

  public category?: Category;

  public isLecturer!:boolean;

  public isConnected!:boolean;

  constructor(private router: Router, private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoryById(this.course.categoryId).subscribe(
      {
        next: (res) => {
          this.category = res;
          console.log("res", res);
        },
        error: (err) => {
          console.error(err);
        }
      });

      this.isLecturer = sessionStorage.getItem('isLecturer') === 'true';
      this.isConnected = sessionStorage.getItem('userDetails')==='true';
  }

  goCourseDetails() {
    console.log("this.course.id", this.course.id)
    this.router.navigate(['/courseDetails/', this.course.id]);
  }
}
