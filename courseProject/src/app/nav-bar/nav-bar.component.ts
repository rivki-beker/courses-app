import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private router: Router) {}

  isConnected() {
    return typeof sessionStorage !== 'undefined' && sessionStorage.getItem('userDetails') != null;
  }

  isLecturer() {
    return typeof sessionStorage !== 'undefined' && sessionStorage.getItem('isLecturer') === 'true';
  }

  home() {
    this.router.navigate(['/home']);
  }

  login() {
    this.router.navigate(['/login']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  logout() {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('userDetails');
      sessionStorage.removeItem('isLecturer');
    }
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home']);
    });
  }

  allCourses() {
    this.router.navigate(['/allCourses']);
  }

  addCourse() {
    this.router.navigate(['/addCourse']);
  }
}
