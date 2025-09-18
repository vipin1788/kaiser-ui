import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MemberIdService {

  private memberIdCardApiUrl: string = `${environment.apiBaseUrl}/getMemberIdCardData`;

  constructor(private http: HttpClient) {}

  getMemberIdCardApi(memberIdCardReq: any): Observable<any> {
    return this.http.post<any>(this.memberIdCardApiUrl, memberIdCardReq);
  }
}
