import { Injectable } from '@angular/core';
import { IStorage } from '../Models/generalModel';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setSessionStorage(value: IStorage) {
    sessionStorage.setItem(value.key, value.value);
  }

  getsessionStorageValue(key: string) {
    return sessionStorage.getItem(key);
  }

  removeFromSession(key: string) {
    sessionStorage.removeItem(key);
  }

  clearSession() {
    sessionStorage.clear();
  }

  setLocalstorage(value: IStorage) {
    localStorage.setItem(value.key, value.value);
  }

  getLocalStorageValue(key: string) {
    return localStorage.getItem(key);
  }

  removeFromLoalStorage(key: string) {
    localStorage.removeItem(key);
  }
}
