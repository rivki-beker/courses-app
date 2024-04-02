import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../entities/course.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:5242/api/Course');
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:5242/api/Course/${id}`);
  }

  updateCourse(course: Course): Observable<void> {
    if (course.id == null)
      course.id = 0;
    const url = `http://localhost:5242/api/Course/${course.id}`;
    return this.http.put<void>(url, course);
  }
}