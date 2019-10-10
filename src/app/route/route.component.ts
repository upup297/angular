import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RouteService} from './route.service';
import {NzMessageService} from 'ng-zorro-antd';



@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.less']
})
export class RouteComponent implements OnInit {
  isVisible = false;
  listOfData = [
  ];
  validateForm: FormGroup;
  constructor(private fb: FormBuilder,
              private routeService: RouteService,
              private nzMessageService: NzMessageService) { }


  ngOnInit() {
    this.validateForm = this.fb.group({
      key: [null],
    /*  key: [null, [Validators.required]],*/
    });
    this.find();
  }

  find() {
    this.routeService.queryListForPage().subscribe(res => {
      console.log(res);
      this.listOfData = res.list;
    });
  }
  delete(data?) {
    console.log(data);
    this.routeService.delete(data.id).subscribe((res: any) => {
        // this.nzMessageService.create(res.message);
        console.log(9568);
    });
  }


  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  submitForm() {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

 /*   if (!this.validateForm.valid) {
      return false;
    }*/
  }
  confirm() {

  }

}
