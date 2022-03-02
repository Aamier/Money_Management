import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageUtilService } from './language-util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Al-Masjid';
  constructor(translate: TranslateService, private languageUtilService: LanguageUtilService) {
    translate.addLangs(['en', 'ar', 'ur']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    debugger
    this.languageUtilService.setLanguage();
  }
}
