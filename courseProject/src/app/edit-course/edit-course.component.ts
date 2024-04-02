import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../entities/course.model';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../services/category.service';
import { CourseService } from '../services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../entities/category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-course',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.css'
})
export class EditCourseComponent {

  @Input()
  course?: Course;

  @Output()
  saveEvent: EventEmitter<void> = new EventEmitter<void>();

  editForm!: FormGroup;
  categories!: Category[];
  editClicked: boolean = false;
  inputs!: string[];

  constructor(private route: ActivatedRoute, private router: Router, private categoryService: CategoryService, private courseService: CourseService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      {
        next: (res) => {
          this.categories = res;
          this.editForm.controls['categoryId'].setValue(this.categories.find(x => x.id == this.course?.categoryId)?.id);
        },
        error: (err) => {
          console.error(err);
        }
      })

    this.editForm = new FormGroup({
      id: new FormControl(this.course?.id),
      name: new FormControl(this.course?.name, [Validators.required, Validators.minLength(3)]),
      categoryId: new FormControl(this.categories?.find(x => x.id == this.course?.categoryId)?.name, Validators.required),
      countOfLessons: new FormControl(this.course?.countOfLessons, Validators.required),
      start: new FormControl(this.course?.start, [Validators.required, Validators.minLength(3)]),
      syllabus: new FormControl(this.course?.syllabus),
      learningWay: new FormControl(this.course?.learningWay, Validators.required),
      lecturerId: new FormControl(this.course?.lecturerId, Validators.required),
      image: new FormControl(this.course?.image, [Validators.required, Validators.minLength(3)])
    });

    if(this.course)
    {
      this.inputs=this.course.syllabus;
      this.inputs.push('');
    }
    else
    this.inputs=[''];
  }
  onInput(event: Event, index: number): void {
    const target = event.target as HTMLInputElement;
    const value = target.value.trim();
    if (value.length == 1 && index === this.inputs.length - 1) {
      this.inputs.pop();
      this.inputs.push(value,'');
      target.value='';
    } else if (!value && index < this.inputs.length - 1) {
      this.inputs.splice(index, 1);
    }
    else
      this.inputs[index] = value;
  }
  cancel() {
    this.saveEvent.emit();
  }
  save(): void {
    this.editClicked = true;
    this.inputs.pop();
    this.editForm.controls['syllabus'].setValue(this.inputs);
    this.courseService.updateCourse(this.editForm.value).subscribe(
      () => {
        Swal.fire({
          title: "Good job!",
          text: "Course updated successfully!",
          icon: "success"
        });
        this.saveEvent.emit();
      },
      (error) => {
        console.error('Error occurred while updating course:', error);
      }
    );
  }
}