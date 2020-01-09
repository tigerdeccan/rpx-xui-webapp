import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'exui-noa-case-details',
  templateUrl: './noa-case-details.component.html',
})
export class NoaCaseDetailsComponent implements OnInit {

  public caseDetailsForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.caseDetailsForm = new FormGroup({
      caseReference: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required)
    });
  }

}

