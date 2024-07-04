import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Category } from '../entities/category.model';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}/Category`;

  constructor(private http: HttpClient) { }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.apiUrl}/${id}`);
  }
  
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl);
  }
}