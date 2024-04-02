import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../services/userLogin.service';
import { CommonModule } from '@angular/common';
import { User } from '../entities/user.model';
import { Router } from '@angular/router';
import { CourseService } from '../services/courses.service';
import { LecturerLoginService } from '../services/lectureLogin.service';
import { Lecturer } from '../entities/lecturer.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [UserLoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  name!: string;
  password!: string;
  incorrectPassword: boolean = false;
  isLecture: boolean = false;
  incorrectCourse: boolean = false;
  loginClicked: boolean = false;

  constructor(private router: Router, private userLoginService: UserLoginService, private lecturerLoginService: LecturerLoginService, private courseService: CourseService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)]),
      courseName: new FormControl("")
    });
  }

  login(): void {
    this.loginClicked = true;
    const userName = this.loginForm.controls['name'].value;
    const password = this.loginForm.controls['password'].value;
    if (!this.isLecture)
      this.userLoginService.checkLogin(userName, password).subscribe(
        (user: User) => {
          sessionStorage.setItem('userDetails', JSON.stringify(user));
          sessionStorage.setItem('isLecturer', 'false');
          this.router.navigate(['/allCourses']);
        },
        (error) => {
          if (error == 'User not found!') {
            console.error('Error occurred:', error);
            this.router.navigate(['/register/', userName]);
          }
          else {
            this.incorrectPassword = true;
            this.loginForm.controls['password'].setValue('');
          }
        }
      );
    else {
      const courseName = this.loginForm.controls['courseName'].value;

      this.lecturerLoginService.checkLogin(userName, password).subscribe(
        (lecturer: Lecturer) => {
          this.courseService.getCourses().subscribe(
            {
              next: (res) => {
                if (res.find(x => x.name == this.loginForm.controls['courseName'].value)?.lecturerId != lecturer.id) {
                  this.incorrectCourse = true;
                  this.loginForm.controls['courseName'].setValue('');
                }
                else {
                  sessionStorage.setItem('userDetails', JSON.stringify(lecturer));
                  sessionStorage.setItem('isLecturer', 'true');
                  this.router.navigate(['/allCourses']);
                }
              },
              error: (err) => {
                console.error(err);
              }
            });
        },
        (error) => {
          if (error == 'User not found!') {
            console.error('Error occurred:', error);
            this.router.navigate(['/register/', userName]);
          }
          else {
            this.incorrectPassword = true;
            this.loginForm.controls['password'].setValue('');
          }
        }
      );
    }

  }
  lectueClicked(){
    this.isLecture=true;
  }
}
