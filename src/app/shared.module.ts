import { Yunzai8Module, BaseClient, BaseClientType } from 'yunzai8';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import {TranslateModule} from '@ngx-translate/core';

const baseClient: BaseClient = {
  gateway: `${environment.gateway}`,
  ignores: [`${environment.gateway}/cas-proxy/app/validate_full?callback=${window.location.href}`],
  stomp: {
    brokerURL: `${environment.stomp_server_url}`,
    connectHeaders: { login: 'guest', passcode: 'guest' },
    heartbeatIncoming: 5,
    heartbeatOutgoing: 20000,
    reconnectDelay: 200
  },
  layout: {
    show_sider: true,
    show_header: true
  },
  systemcode: 'test-group-4',
  type: BaseClientType.CAS_SYSTEM,
  dev: false
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    Yunzai8Module.forRoot(baseClient),
    TranslateModule.forRoot()
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgZorroAntdModule,
    Yunzai8Module,
    TranslateModule
  ]
})
export class SharedModule {
}
