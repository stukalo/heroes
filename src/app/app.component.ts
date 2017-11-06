import { Component } from '@angular/core';
import { Hero } from './hero';

import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit  {
  title = 'Tour of Heroes';

  constructor() { }

  ngOnInit(): void {
  }


}
