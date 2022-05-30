import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _http: HttpClient, private _storageService: StorageService) { }

  getAllStudents(): Observable<any>{

    let token = this._storageService.getStorage('jwtToken');

      return this._http.get('https://localhost:7190/api/students',
      {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': `Bearer: ${token}`
          }
        )
      }
    );
  }
}
