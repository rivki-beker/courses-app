import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register/:name', component: RegisterComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'allCourses', component: AllCoursesComponent },
    { path: 'addCourse', component: AddCourseComponent },
    { path: 'courseDetails/:id', component: CourseDetailsComponent },
    { path: '**', component: NotFoundComponent }
];