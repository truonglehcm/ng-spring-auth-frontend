import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppSettings } from '../../app-config.module';
import { Headers, Http, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { IProfile } from '../../models/profile';
import { IPassword } from '../../models/password';
import { IResetPassword } from '../../models/reset-password';
import { UserProfile } from '../../models/user-profile';
import { AuthService, JwtHttp } from 'ng2-ui-auth';
import { IUser } from '../../models/user';

@Injectable()
export class UserService {

  constructor(private http: JwtHttp, private auth: AuthService) { }

  getProfile(): Observable<UserProfile[]> {
    return this.http.get(AppSettings.API_USER_PROFILE)
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
    return this.http.put(AppSettings.API_USER_PROFILE, dataProfile)
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
    return this.http.put(AppSettings.API_CHANGE_PASSWORD, passwordData)
      .map((response) => {
        let content;
        content = {
          error: null,
          data: response.status
        };
        return content;
      });
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get(AppSettings.API_MANAGE_USERS)
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

  getUser(id: number): Observable<IUser[]> {
    return this.http.get(AppSettings.API_MANAGE_USERS + id)
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

  addUser(dataUser: IUser) {
    return this.http.post(AppSettings.API_MANAGE_USERS, dataUser)
    .map((response) => {console.log(response);
      let content;
      content = {
        error: null,
        data: response.status
      };
      return content;
    });
  }

  updateUser(id: number, dataUser: IUser) {
    const reqUrl = AppSettings.API_MANAGE_USERS + id;
    return this.http.put(reqUrl, dataUser)
    .map((response) => {
      let content;
      content = {
        error: null,
        data: response.status
      };
      return content;
    });
  }

  deleteUser(id: number) {
    return this.http.delete(AppSettings.API_MANAGE_USERS + id)
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
