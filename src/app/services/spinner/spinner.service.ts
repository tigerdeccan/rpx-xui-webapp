import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isSpinning = new Subject<boolean>();
  show() {
    this.isSpinning.next(true);
  }
  hide() {
    this.isSpinning.next(false);
  }
  constructor() { }
}
