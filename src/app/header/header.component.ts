import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() display = new EventEmitter<string>();

  collapsed = true;
  constructor() { }

  onClicked(dispaydata: string) {
    this.display.emit(dispaydata);
    console.log(dispaydata);

  }


  ngOnInit() {
  }

}
