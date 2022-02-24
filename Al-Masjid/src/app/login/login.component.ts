import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LanguageUtilService } from '../language-util.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  subScription = new Subscription();
  loginForm!: FormGroup;
  items: MenuItem[];
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
     private router: Router, private spinner: NgxSpinnerService, private messageService: MessageService,
     private primengConfig: PrimeNGConfig, private translate: LanguageUtilService) { 
       this.items = []
     }

  ngOnInit(): void {
    //sessionStorage.clear();
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
          sessionStorage.setItem('token', success.access);
          this.router.navigateByUrl("app");
          this.spinner.hide();
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Welcome Back'});
        }
      )
    )
  }

  changeLanguage() {
    this.translate.changeLanguage();
  }

  ngOnDestroy(): void {
    this.subScription.unsubscribe();
  }

}
