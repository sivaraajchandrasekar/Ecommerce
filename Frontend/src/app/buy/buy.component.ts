// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../user.service';
// import { User } from '../user.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-buy',
//   templateUrl: './buy.component.html',
//   styleUrls: ['./buy.component.css']
// })
// export class BuyComponent {
//   orderForm: FormGroup;

//   constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
//     this.orderForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       phoneno: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
//       email: ['', [Validators.required, Validators.email]],
//       street: ['', Validators.required],
//       area: ['', Validators.required],
//       pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
//       payment: ['', Validators.required],
//       upiProvider: ['', Validators.required]
//     });
//   }

//   placeOrder() {
//     if (this.orderForm.valid) {
//       const user: User = this.orderForm.value;
//       console.log('Form is valid:', user);
//       this.userService.order(user).subscribe(
//         (data: any) => {
//           alert('Order placed successfully');
//           this.router.navigate(['home']);
//           console.log('Order placed:', data);
//         },
//         (error) => {
//           alert('Failed to place order');
//           console.error('Order placement failed:', error);
//         }
//       );
//     } else {
//       console.log('Form not submitted. Invalid data.');
//     }
//   }

//   back() {
//     this.router.navigate(['home']);
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {
  orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.orderForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneno: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      street: ['', Validators.required],
      area: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      payment: ['', Validators.required],
      upiProvider: [''] // Removed Validators.required for upiProvider field, as it's conditionally displayed
    });
  }

  placeOrder() {
    if (this.orderForm.valid) {
      const user: User = this.orderForm.value;
      console.log('Form is valid:', user);
      this.userService.order(user).subscribe(
        (data: any) => {
          alert('Order placed successfully');
          this.router.navigate(['home']);
          console.log('Order placed:', data);
        },
        (error) => {
          alert('Failed to place order');
          console.error('Order placement failed:', error);
        }
      );
    } else {
      console.log('Form not submitted. Invalid data.');
    }
  }

  back() {
    this.router.navigate(['home']);
  }
}
