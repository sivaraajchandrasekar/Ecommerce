// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../user.service';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { User } from '../user';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm!: FormGroup;
//   passwordFieldType: string = 'password';
//   showRegisterSuccess: boolean = false;

  

//   constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
//     this.registerForm = this.formBuilder.group({
//       username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), this.validateUsername]],
//       password: ['', [Validators.required, Validators.minLength(8), this.validatePassword]]
//     });
//   }

//   validateUsername(control: FormControl) {
//     const value = control.value;
//     const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
//     if (value && (!usernameRegex.test(value) || value.length < 8 || value.length > 20)) {
//       return { invalidUsername: true };
//     }
//     return null;
//   }

//   validatePassword(control: FormControl) {
//     const value = control.value;
//     const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/;
//     if (value && (value.length < 8 || !passwordRegex.test(value))) {
//       return { invalidPassword: true };
//     }
//     return null;
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       const user: User = {
//         id: this.registerForm.value.id,
//         username: this.registerForm.value.username,
//         password: this.registerForm.value.password
//       };
//       this.userService.postData(user).subscribe(
//         (data: any) => {
//           alert("Your Account Has Been Opened");
//           console.log('User registration successful:', data);
//           this.router.navigate([""]);
//           this.showRegisterSuccess = true;
//         },
//       );
//     } else {
//       console.log('Form not submitted. Invalid data.');
//     }
//   }


  
//   goToLogin() {
//     this.router.navigate([""]);
//   }





//   username: string = '';
//   password: string = '';
//   passwordField: any; 
//   showAlert: boolean = false;
//   alertMessage: string = '';

  

//   log() {
//     this.userService.login(this.username, this.password).subscribe(
//       (data: any) => {
//         console.log("Login Success");
//         this.router.navigate(['home']);
//         this.userService.setLoggedInUser(this.username);
//       },
//       (error) => {
//         this.showAlert = true;
//         this.alertMessage = 'Not a valid username or password. Please try again.';
//         console.error('Login failed:', error);
//       }
//     );
//   }

//   sing() {
//     this.router.navigate(['']);
//   }

//   togglePasswordVisibility(): void {
//     this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
//   }
// }

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { User, UserService } from '../user.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {
//   registerForm!: FormGroup;
//   passwordFieldType: string = 'password';
//   showAlert: boolean = false;
//   alertMessage: string = '';
//   passwordField: any; 
//   username: string = '';
//   password: string = '';

//   constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
//     this.registerForm = this.formBuilder.group({
//       username: ['', [Validators.required]], // Add other validators for username if needed
//       password: ['', [Validators.required]]  // Add other validators for password if needed
//     });
//   }

//   onSubmit() {
//     if (this.registerForm.valid) {
//       const user: User = {
//         username: this.registerForm.value.username,
//         password: this.registerForm.value.password,
//         id: this.registerForm.value.id,
//       };

//       // Call your service method to register the user
//       this.userService.postData(user).subscribe(
//         (data: any) => {
//           console.log('User registration successful:', data);
//           this.showAlert = true;
//           this.alertMessage = 'Registration successful!';
//           this.router.navigate(['']); // Redirect to login or other page
//         },
//         (error) => {
//           console.error('User registration failed:', error);
//           this.showAlert = true;
//           this.alertMessage = 'Registration failed. Please try again.';
//         }
//       );
//     }
//   }

//   goToLogin() {
//     this.router.navigate(['']); // Redirect to the login page
//   }

//   togglePasswordVisibility(): void {
//     this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
//   }
// }



import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  passwordFieldType: string = 'password';
  showAlert: boolean = false;
  alertMessage: string = '';
  usernameField: any; // Replace 'any' with the appropriate type
  passwordField: any;

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(20), this.validateUsername]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(12), this.validatePassword]]
    });
  }

  validateUsername(control: FormControl) {
    const value = control.value;
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]*$/;
    if (value && (!usernameRegex.test(value) || value.length < 8 || value.length > 20)) {
      return { invalidUsername: true };
    }
    return null;
  }

  validatePassword(control: FormControl) {
    const value = control.value;
    const passwordRegex = /^(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]*$/;
    if (value && (value.length < 8 || !passwordRegex.test(value))) {
      return { invalidPassword: true };
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user: User = {
        id: this.registerForm.value.id,
        username: this.registerForm.value.username,
        password: this.registerForm.value.password
      };
      this.userService.postData(user).subscribe(
        (data: any) => {
          alert("Your Account Has Been Opened");
          console.log('User registration successful:', data);
          this.router.navigate([""]);
        },
        (error) => {
          this.showAlert = true;
          this.alertMessage = 'An error occurred during registration. Please try again.';
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Form not submitted. Invalid data.');
    }
  }

  goToLogin() {
    this.router.navigate([""]);
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}

