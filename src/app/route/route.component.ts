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
  editId = null;
  listOfData = [
  ];
  validateForm: FormGroup;
  constructor(private fb: FormBuilder,
              private routeService: RouteService,
              private nzMessageService: NzMessageService) { }


  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      createdDate: [null, [Validators.required]],
      content: [null, [Validators.required]],
      code: [null, [Validators.required]],

    /*  key: [null, [Validators.required]],*/
    });

    this.find();

  }

  find() {
    this.routeService.queryListForPage().subscribe(res => {
      this.listOfData = res.list;
    });
  }
  delete(data?) {
    this.routeService.delete(data.id).subscribe((res: any) => {
         this.nzMessageService.success(res.message);
         this.find();
    });
  }


  showModal(): void {
    this.validateForm.reset();
    this.isVisible = true;
  }
  updateModel(data?) {
    this.editId = data.id;
    this.validateForm.patchValue(data);
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm() {
    // tslint:disable-next-line:forin
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (!this.validateForm.valid) {
      return false;
    }
    const data = this.validateForm.value;

    data.id = this.editId;
    data.createdDate = new Date(data.createdDate).getTime();

    this.routeService.add(data).subscribe(res => {
      this.nzMessageService.success( res.message);
      this.isVisible = false;
      this.find();
    }, err => {
        this.nzMessageService.error(`${err.error.errorMessage}`);
    });
  }
  confirm() {

  }

}
