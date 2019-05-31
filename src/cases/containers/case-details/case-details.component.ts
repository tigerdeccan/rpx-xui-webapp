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
    <ccd-case-viewer [hasPrint]="true"
                     [hasEventSelector]="true"></ccd-case-viewer>
  `
})
export class CaseDetailsComponent implements OnInit{

  constructor() {}

  caseId = '1559225025259926';
  eventTriggerId = ['enterCaseIntoLegacy'];

  ngOnInit(): void {
  }

  cancel($event) {}
  submit($event) {}

}
