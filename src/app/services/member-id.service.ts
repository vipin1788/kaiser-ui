import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MemberIdService {

  private memberIdCardApiUrl: string = `/getMemberIdCardData`;

  constructor(private http: HttpClient) {}

  getMemberIdCardApi(memberIdCardReq: any): Observable<any> {
    const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-token-here'
  });
    return this.http.post<any>(this.memberIdCardApiUrl, memberIdCardReq, {headers});
  }
}
