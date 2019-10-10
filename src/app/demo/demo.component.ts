import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent implements OnInit {

  constructor(private router: Router) {
  }
  open() {
    this.router.navigate(['/demoDetail/', '123']);
  }

  ngOnInit() {
  }

}
