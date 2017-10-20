import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../../app-config.module';
import { Headers, Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { IProfile } from '../../models/profile';
import { IPassword } from '../../models/password';
import { IResetPassword } from '../../models/reset-password';
import { UserProfile } from '../../models/user-profile';
import { AuthService } from 'ng2-ui-auth';

@Injectable()
export class UserService {

  constructor(private http: Http, private auth: AuthService) { }

  getProfile(): Observable<UserProfile[]> {
    let option: RequestOptions;
    option = this.setHttpGetParam(AppSettings.API_USER_PROFILE);
    const requestUrl = AppSettings.API_USER_PROFILE;
    return this.http.request(requestUrl, option)
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

  resetPassword(email: String): Observable<void> {
    const requestUrl = AppSettings.API_RESET_PASSWORD + '?email=' + email;
    return this.http.post(requestUrl, null)
      .map((response) => {
        let content;
        content = {
          error: null,
          data: response.status
        };
        return content;
      });
  }

  resetPasswordConfirm(dataReset: IResetPassword): Observable<void> {
    const requestUrl = AppSettings.API_RESET_PASSWORD + '/confirm';
    return this.http.post(requestUrl, dataReset)
      .map((response) => {
        let content;
        content = {
          error: null,
          data: response.status
        };
        return content;
      });
  }

  updateProfile(dataProfile: IProfile): Observable<void> {
    let option: RequestOptions;
    option = this.setHttpPutParam(AppSettings.API_USER_PROFILE);
    return this.http.post(AppSettings.API_USER_PROFILE, dataProfile, option)
      .map((response) => {
        let content;
        content = {
          error: null,
          data: response.status
        };
        return content;
      });
  }

  changePassword(passwordData: IPassword): Observable<void> {
    let option: RequestOptions;
    option = this.setHttpPutParam(AppSettings.API_CHANGE_PASSWORD);
    return this.http.post(AppSettings.API_CHANGE_PASSWORD, passwordData, option)
      .map((response) => {
        let content;
        content = {
          error: null,
          data: response.status
        };
        return content;
      });
  }


  private setHttpGetParam(url: string): RequestOptions {
    const headers = new Headers();
    headers.append('Authorization', this.auth.getToken());
    const options: RequestOptionsArgs = {
      headers: headers,
      method: 'get',
      url: url
    };
    return new RequestOptions(options);
  }

  private setHttpPutParam(url: string): RequestOptions {
    const headers = new Headers();
    headers.append('Authorization', this.auth.getToken());
    const options: RequestOptionsArgs = {
      headers: headers,
      method: 'put',
      url: url
    };
    return new RequestOptions(options);
  }
}
