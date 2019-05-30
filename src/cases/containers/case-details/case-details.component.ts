import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/**
 * Entry component
 * Dumb Component
 * param TBC
 */
@Component({
  selector: 'exui-case-details',
  template: `
    <h1>Case Details Page</h1>
    <ccd-case-progress [case]="caseId"
                       [event]="eventTriggerId"
                       (cancelled)="cancel()"
                       (submitted)="submit()">
    </ccd-case-progress>
  `
})
export class CaseDetailsComponent implements OnInit{

  constructor() {}

  caseId = '1559225025259926';
  eventTriggerId = 'enterCaseIntoLegacy';

  ngOnInit(): void {
  }

  cancel($event) {}
  submit($event) {}

}
