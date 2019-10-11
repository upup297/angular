import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) {
  }

  // 获取用户信息
  queryListForPage(): Observable<any> {
    return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/queryListForPage`, {});

  }

  // 删除用户
  delete(id): Observable<any> {
    return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/delete/` + id , {} );
  }

  // 添加

  add(data): Observable<any> {
    if (data.id == null) {
      return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/insert`, data);
    } else {
      return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/update`, data);
    }

  }



}
