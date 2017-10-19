import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IResetPassword } from '../../models/reset-password';
import { AppSettings } from '../../app-config.module';

@Injectable()
export class ResetPasswordService {

  constructor(private http: Http) { }

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
}
