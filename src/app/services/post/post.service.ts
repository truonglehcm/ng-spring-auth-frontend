import { Injectable } from '@angular/core';
import { Headers, Http, Response, Request, RequestMethod , RequestOptionsArgs, RequestOptions, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IPost } from '../../models/post';
import { AppSettings } from '../../app-config.module';
import { JwtHttp } from 'ng2-ui-auth';

@Injectable()
export class PostService {

  constructor(private http: JwtHttp) { }

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
    return this.http.get(AppSettings.API_POSTS + id)
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

  addPost(dataPost: IPost) {
    return this.http.post(AppSettings.API_MANAGE_POSTS, dataPost)
    .map((response) => {console.log(response);
      let content;
      content = {
        error: null,
        data: response.status
      };
      return content;
    });
  }

  updatePost(id: number, dataPost: IPost) {
    const reqUrl = AppSettings.API_MANAGE_POSTS + id;
    return this.http.put(reqUrl, dataPost)
    .map((response) => {
      let content;
      content = {
        error: null,
        data: response.status
      };
      return content;
    });
  }

  deletePost(id: number) {
    return this.http.delete(AppSettings.API_MANAGE_POSTS + id)
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
