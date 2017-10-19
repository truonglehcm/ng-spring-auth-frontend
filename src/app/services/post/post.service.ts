import { Injectable } from '@angular/core';
import { Headers, Http, Response, Request, RequestMethod , RequestOptionsArgs, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IPost } from '../../models/post';
import { AppSettings } from '../../app-config.module';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get(AppSettings.API_POSTS)
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

  getPost(id: number): Observable<IPost[]> {
    let option: RequestOptions;
    option = this.setHttpGetParam(AppSettings.API_POSTS + id);
    return this.http.request(AppSettings.API_POSTS, option)
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
}
