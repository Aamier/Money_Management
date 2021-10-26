import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
     private router: Router, private spinner: NgxSpinnerService, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {
    this.spinner.show();
    this.subScription.add(
      this.authService.login(this.loginForm.value).subscribe(
        success => {
          sessionStorage.setItem('token', success.access);
          this.router.navigateByUrl("home");
          this.spinner.hide();
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Welcome Back'});
        }
      )
    )
  }

  ngOnDestroy(): void {
    this.subScription.unsubscribe();
  }

}
