import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TesService {


  constructor(
    private http: HttpClient
  ) { }

  // 获取短信信息
  queryListForPage() {
        return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/queryListForPage`, {} );
  }
  // 添加
  add(data) {
    if (data.id  == null) {
      return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/insert`, data)
    } else {
      return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/update`, data)
    }
  }

  // 刪除
  delete(id) {
    return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/delete/` + id, {});
  }
}
