import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private http: HttpClient) {}

  postRequest(email: string, password: string) {
    const url = 'http://localhost:3000/signup/api';
    const body = { email: email, password: password };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    this.http.post(url, body, { headers }).subscribe(
      {
        next: (response) => console.log('Response: ', response),
        error: (error) => console.log('Error: ', error),
        complete: () => console.log('post complete'),
      }
      // (response) => {
      //   console.log('Response: ', response);
      // },
      // (error) => {
      //   console.log('Error: ', error);

      // }
    );
  }
}
