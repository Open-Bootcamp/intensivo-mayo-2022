import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setStorage(key:string, value: any){
    sessionStorage.setItem(key, value);
  }

  getStorage(key: string){
    return sessionStorage.getItem(key);
  }

  removeStorage(key:string){
    sessionStorage.removeItem(key);
  }

}
