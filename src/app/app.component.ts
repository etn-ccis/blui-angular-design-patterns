import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-design-patterns';
  designPatternDetails: string;

  constructor(public router: Router) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe((event) => {
        if (event) {
          this.designPatternDetails = this.getDesignPatternDetails(this.router.url);
        }
      });
  }

  getDesignPatternDetails(url: string) {
    let message;

    switch (url) {
      case '/data-list':
        message = '...some info about the data list'
        break;
      case '/action-list':
        message = '...some info about the action list'
        break;
      case '/form-validation':
        message = '...some info about form-validation'
        break;
      default:
        ''
    }

    return message;
  }

}
