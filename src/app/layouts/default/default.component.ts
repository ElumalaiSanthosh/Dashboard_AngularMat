import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  sideBar = true;
  constructor() { }

  ngOnInit(): void {
  }
  sideBarToggle(sideBar: boolean) {
    this.sideBar = !this.sideBar;
  }

}
