import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../entities/course.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private apiUrl = `${environment.apiUrl}/Course`;

  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  updateCourse(course: Course): Observable<void> {
    if (course.id == null)
      course.id = 0;
    const url = `${this.apiUrl}/${course.id}`;
    return this.http.put<void>(url, course);
  }
}