import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  subScription = new Subscription();
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
     private router: Router, private spinner: NgxSpinnerService, private messageService: MessageService, private primengConfig: PrimeNGConfig, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['shakeel.rymec@gmail.com', Validators.required],
      password: ['Shakeel123', Validators.required]
    })
  }

  login() {
    this.spinner.show();
    this.subScription.add(
      this.authService.login(this.loginForm.value).subscribe(
        success => {
          console.log("success", success);
          sessionStorage.setItem('token', success.access);
          this.router.navigateByUrl("home");
          this.spinner.hide();
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Welcome Back'});
        },
        err => {
          console.log("err", err);
          this.spinner.hide();
          this.toastrService.error('Something went wrong, try after sometime');
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subScription.unsubscribe();
  }

}
