import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restro';
  displayItem =  'recipe';

  show(data: string) {
    this.displayItem = data;
    console.log(data)
  }
}
