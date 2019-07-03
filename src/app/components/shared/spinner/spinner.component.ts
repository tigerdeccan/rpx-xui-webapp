import { Component, OnInit } from '@angular/core';
import {SpinnerService} from '../../../services/spinner/spinner.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'exui-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  isSpinning: Subject<boolean> = this.spinnerService.isSpinning;
  constructor(private spinnerService: SpinnerService) { }

  ngOnInit() {
  }

}
