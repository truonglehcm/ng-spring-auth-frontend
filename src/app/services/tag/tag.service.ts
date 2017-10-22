import { Injectable } from '@angular/core';
import { JwtHttp } from 'ng2-ui-auth';
import { Observable } from 'rxjs/Observable';
import { ITag } from '../../models/tag';
import { AppSettings } from '../../app-config.module';

@Injectable()
export class TagService {

  constructor(private http: JwtHttp) { }

  getTags(): Observable<ITag[]> {
    return this.http.get(AppSettings.API_MANAGE_TAGS)
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

  getTag(id: number): Observable<ITag[]> {
    return this.http.get(AppSettings.API_MANAGE_TAGS + id)
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

  addTag(dataTag: ITag) {
    return this.http.post(AppSettings.API_MANAGE_TAGS, dataTag)
    .map((response) => {console.log(response);
      let content;
      content = {
        error: null,
        data: response.status
      };
      return content;
    });
  }

  updateTag(id: number, dataTag: ITag) {
    return this.http.put(AppSettings.API_MANAGE_TAGS, dataTag)
    .map((response) => {
      let content;
      content = {
        error: null,
        data: response.status
      };
      return content;
    });
  }

  deleteTag(id: number) {
    return this.http.delete(AppSettings.API_MANAGE_TAGS + id)
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
