import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // private apiUrl = 'http://localhost:3000/send-email'; // Your backend API endpoint

  // constructor(private http: HttpClient) {}

  // sendEmail(formData: any): Observable<any> {
  //   return this.http.post<any>(this.apiUrl, formData);
  // }
  // sendEmail(data: any): Observable<any> {
  //   return this.http.post(`${environment.API_URL}/api/staff/createStaff`, data).pipe(catchError(this.handler));
  // }
}
