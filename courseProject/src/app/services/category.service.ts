import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from '../entities/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${process.env['API_URL']}/Category`;

  constructor(private http: HttpClient) { }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
  
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }
}