import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SiderService, TokenService} from 'yunzai8';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient, private sider: SiderService, private token: TokenService) {
  }

  ngOnInit(): void {
  }

}
