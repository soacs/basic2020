import {Component} from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.css'],
})
export default class NavigationComponent {
  content: string;

  constructor() {
    this.content = 'NavigationComponent';
  }
}
