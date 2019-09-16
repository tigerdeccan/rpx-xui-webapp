import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'exui-case-home',
  templateUrl: 'case-home.component.html'
})
export class CaseHomeComponent {
  currentURL = 'currentURL';
  constructor(private router: Router) {
    // const urlTobeReloaded = localStorage.getItem(this.currentURL);
    // console.log(urlTobeReloaded);
    // if (urlTobeReloaded && urlTobeReloaded !== this.router.url) {
    //   this.router.navigate([urlTobeReloaded]);
    //   localStorage.removeItem(this.currentURL );
    // }
  }
}
