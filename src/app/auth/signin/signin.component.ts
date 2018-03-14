import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'] ,
  encapsulation: ViewEncapsulation.None
})
export class SigninComponent implements  OnInit {
  constructor(private authService: AuthService) {}

ngOnInit () {
}
  onSignIn(form: NgForm) {
    this.authService.signinUser(form.value.email, form.value.password);

  }
  // @ViewChild('f') signInForm: NgForm;
  // user = {email: '',
  //   password :  ' '  };
  // submitted = false;
 // ngOnInit() {}
 //  onSignin(form: NgForm) {
 //    this.submitted = true;
 //    // const email = form.value.email;
 //    // const password = form.value.password;
 //    this.authService.signinUser(form.value.email, form.value.password);
 //  }
}
  // onSubmit() {
  //   this.submitted = true ;
  //   this.user.email = this.signInForm.value.email;
  //   this.user.password = this.signInForm.value.password;
  //
  //   // this.signInForm.reset();
  // }
//   ngOnInit() {}
// }
//
//   constructor(private authService: AuthService) { }
//
//   ngOnInit() {
//   }
//
//   onSignIn(form: NgForm) {
//     this.authService.signinUser(form.value.email, form.value.password);
//   }
// }
