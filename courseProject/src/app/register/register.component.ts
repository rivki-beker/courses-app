import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginService } from '../services/userLogin.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [UserLoginService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  incorrectPassword: boolean = false;
  registerClicked: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private userLoginService: UserLoginService) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(3)]),
      address: new FormControl("", [Validators.required, Validators.minLength(3)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });

    this.route.params.subscribe(params => {
      const name = params['name'];
      this.registerForm.controls['name'].setValue(name);
    });
  }

  register(): void {
    this.registerClicked = true;
    const userName = this.registerForm.controls['name'].value;
    const address = this.registerForm.controls['address'].value;
    const email = this.registerForm.controls['email'].value;
    const password = this.registerForm.controls['password'].value;
    this.userLoginService.checkLogin(userName, password).subscribe({
      next: () => {
        Swal.fire({
          icon: "error",
          title: '<p> Your account already exists</p>',
          text: `You are currently logged in as ${userName}`,
          footer: '<a href="/allCourses">Go to watch our courses</a>'
        });
        sessionStorage.setItem('userDetails', JSON.stringify({userName, address, email, password}));
        sessionStorage.setItem('isLecturer', 'false');
      },
      error: () => {
        this.userLoginService.addUser(userName, address, email, password).subscribe({
          next: () => {
            sessionStorage.setItem('userDetails', JSON.stringify({userName, address, email, password}));
            sessionStorage.setItem('isLecturer', 'false');
            this.router.navigate(['/allCourses']);
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
    });
    
  }
}