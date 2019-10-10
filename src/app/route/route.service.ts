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
    return this.http.delete(`${environment.gateway}/message-center/v2/msgtpl/delete/` + id , {} );
  }

  //添加

  add(params): Observable<any> {
    return this.http.post(`${environment.gateway}/message-center/v2/msgtpl/insert`, params);
  }


  // 重置用户密码
  resetPassword(idParam): Observable<any> {
    return this.http.post(`${environment.gateway}/auth/reset/password`, idParam);
  }
  updateUserPassword(param): Observable<any> {
    return this.http.post(`${environment.gateway}/auth/updateUserPassword`, param);
  }

  // 保存 编辑
  save(data): Observable<any> {
    if (data.userId == null) {
      return this.http.post(`${environment.gateway}/auth/baseUser`, data);
    } else {
      return this.http.put(`${environment.gateway}/auth/baseUser`, data);
    }
  }

  // 获取部门
  departmentTreeList(): Observable<any> {
    return this.http.get(`${environment.gateway}/auth/baseDepartMent/tree`);
  }

  // 获取角色类型
  rolesQueryList(rolesParams): Observable<any> {
    return this.http.post(`${environment.gateway}/auth/baserole/queryListForPage`, rolesParams);
  }

  // 配置权限
  authTree(authParams): Observable<any> {
    return this.http.post(`${environment.gateway}/auth/baseUser/menuAndAuth`, authParams);
  }
  /**
   * 登录配置信息
   */
  getLoginConfig() {
    return this.http.get(`${environment.gateway}/app-manager/sysConfig/getLoginConfig`, {});
  }
}
