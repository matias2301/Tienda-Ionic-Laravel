import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:8000';

  constructor(
    private httpClient: HttpClient,
  ) { }

  sendEmail(formData: any): Observable<any> {    

    return this.httpClient
    .post<any>(`${this.AUTH_SERVER_ADDRESS}/api/send/email`, formData)
    .pipe(
      map( res => res ),
    );
  }

}
