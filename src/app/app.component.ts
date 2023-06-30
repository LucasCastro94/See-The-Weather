import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment-timezone';
import 'moment/locale/pt-br';

@Component({
  selector: 'jv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(title:Title) {
    moment.locale('pt-br');
    title.setTitle('See the Weather')
  }

}
