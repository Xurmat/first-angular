import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  @Input('title') myTitle!: string;
  @Output() myTitleChange = new EventEmitter<string>();
  @Input('Desc') desc!: string;
  @Output() mydescChange = new EventEmitter<string>();
  @Input('footer') myFooter!: string;
  @Output() myFooterChange = new EventEmitter<string>();

  test = 'paq';
  constructor() {}

  testFn() {
    this.myTitleChange.emit(this.myTitle);
    this.mydescChange.emit(this.desc);
    this.myFooterChange.emit(this.myFooter);
    // alert("bosildi!!!!")
  }

  ngOnInit(): void {}
}
