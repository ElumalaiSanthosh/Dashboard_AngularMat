import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMenu = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }
  toggleSideBar() {
    this.toggleSideBarForMenu.emit();
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    },200);
    
  }

}
