import { Component, OnInit } from '@angular/core';
import {TesService} from './tes.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-tes',
  templateUrl: './tes.component.html',
  styleUrls: ['./tes.component.less']
})
export class TesComponent implements OnInit {
  isVisible = false;
  editId = null;
  listOfData = [];
  validateForm: FormGroup;

  constructor(
    private tesService: TesService,
    private fb: FormBuilder,
    private  nzMessageService: NzMessageService
    ) { }
  showModal(): void {
    this.validateForm.reset();
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }

  submitForm() {
    // tslint:disable-next-line:forin
    for (const key in this.validateForm.controls) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
    }

    if (!this.validateForm.valid) {
      return false;
    }
    const  data = this.validateForm.value;
    this.tesService.add(data).subscribe((res: any) => {
      console.log(res);
      this.nzMessageService.success(res.message);
      this.isVisible = false;
      this.find();
    }, err => {
      this.nzMessageService.error(`${err.error.errorMessage}`);
    });
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      createdDate: [null, [Validators.required]],
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      content: [null, [Validators.required]],
    });
    this.find();
  }

  find() {
    this.tesService.queryListForPage().subscribe((res: any) => {
      this.listOfData = res.list;
    });
  }

  delete(data?) {
    this.tesService.delete(data.id).subscribe((res: any) => {
      this.nzMessageService.success(res.message);
      this.find();
    });
  }

  update(data?) {
    this.isVisible = true;
    this.editId = data.id;
    this.validateForm.patchValue(data);
  }
}
