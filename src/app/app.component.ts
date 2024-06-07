import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'my-first-app';
  prop!: string;
  cartTitle = '';
  description = '';
  Footer = '';

 handleClick(value:string) {
this.cartTitle = value;
 }

}
