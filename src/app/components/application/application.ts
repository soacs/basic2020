import {Component, ViewEncapsulation} from '@angular/core';
import {devUrl} from '../../config/urls';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './application.html',
  styleUrls: ['./application.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ApplicationComponent {
  content: string;
  devUrl: string;
  title = 'basic';

  constructor() {
    this.content = 'ApplicationComponent';
    this.devUrl = environment.url;

  }
}
