import { Injectable } from '@angular/core';
import { Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ISignup } from '../../models/signup';
import { AppSettings } from '../../app-config.module';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }

  getRecaptchaKey(): Observable<String> {
    let option: RequestOptions;
    option = this.setHttpGetParam(AppSettings.API_SIGNUP);
    return this.http.request(AppSettings.API_SIGNUP, option)
      .map((response) => {
        let content;
        const obj = response.json();
        content = {
          error: null,
          data: obj
        };
        return content;
      });
  }

  private setHttpGetParam(url: string): RequestOptions {
    const param = new URLSearchParams();
    const options: RequestOptionsArgs = {
      method: 'get',
      url: url,
      search: param
    };
    return new RequestOptions(options);
  }

  signup(signupData: ISignup): Observable<void> {
    return this.http.post(AppSettings.API_SIGNUP, signupData)
      .map((response) => {
        let content;
        content = {
          error: null,
          data: response.status
        };
        return content;
      });
  }

  signupConfirm(token: String): Observable<void> {
    const urlRequest = AppSettings.API_SIGNUP + 'confirm/' + token;
    return this.http.post(urlRequest, null)
      .map((response) => {
        let content;
        content = {
          error: null,
          data: response.status
        };
        return content;
      });
  }
}
