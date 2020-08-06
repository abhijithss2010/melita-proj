import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'melita-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active = false;

  public userData = {
    firstName: 'Abhijih',
    lastName: 'S S',
  };

  constructor() {}

  ngOnInit() {}
}
