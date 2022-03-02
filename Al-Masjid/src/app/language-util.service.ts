import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageUtilService {

  constructor(private translate: TranslateService, private storageService: StorageService) { }

  changeLanguage() {
    debugger
    const lang = this.translate.currentLang;
    switch(lang) {
      case 'ur':
        this.storageService.setLocalstorage({key: 'lang', value: 'en'});
        this.translate.use('en');
        break;
      case 'en':
        this.storageService.setLocalstorage({key: 'lang', value: 'ur'});
        this.translate.use('ur');
        break; 
    }
  }

  setLanguage() {
    const lang = this.storageService.getLocalStorageValue('lang');
    if(lang === null) {
      this.translate.use('en');
      this.storageService.setLocalstorage({key:'lang', value:'en'});
    } else {
      this.translate.use(lang)
    }
  }
}
