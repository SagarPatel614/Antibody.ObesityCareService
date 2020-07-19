import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  styleUrls: ['login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  ss: SharedService;
  loginForm: FormGroup;
  loading = false;
  error:any;
  returnUrl: string;

  constructor(ss: SharedService,
    private formBuilder: FormBuilder,
    private authService : AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToastrService) {
    this.ss = ss;
    this.ss.hideFooterButton();
    this.ss.setVideoLink("/home");
    authService.tryLogin('/hcphome');
   // authService.logout();
  }



  ngOnInit() {
   this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      });
  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/hcphome';
  }

  get f() { return this.loginForm.controls; }

  login() {
    if (this.loginForm.valid) {
      this.loading = true;
      if(this.authService.login(this.f.username.value, this.f.password.value)){
        this.router.navigate([this.returnUrl]);
      }
  }
  else{
    this.toasterService.error("Incorrect username or password");
  }
}


}

