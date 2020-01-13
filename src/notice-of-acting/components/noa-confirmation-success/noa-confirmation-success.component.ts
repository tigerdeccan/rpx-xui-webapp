import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'exui-noa-confirmation-success',
  templateUrl: './noa-confirmation-success.component.html',
})
export class NoaConfirmationSuccessComponent implements OnInit {

  public caseDetailsForm: FormGroup;
  constructor() {}

  ngOnInit(): void {
  }

}

