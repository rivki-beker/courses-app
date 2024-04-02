import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [EditCourseComponent],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  constructor(private router: Router) { }
  onSave()
  {
    this.router.navigate(['/allCourses']);
  }
}
