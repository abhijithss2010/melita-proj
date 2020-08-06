import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'melita-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  main1 = false;
  main2 = true;
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.main1 = !this.main1;
      this.main2 = !this.main2;
    }, 1000);
  }
}
