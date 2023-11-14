import { Component, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 , transform:'translateX(25px)'})),
      transition('void=>*', [animate(2000)]),
      transition('*=>void', [animate(2000)]),
    ]),
  ],
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    this.carouselsUpdater();
  }

  carousels = [
    { path: '../assets/Carousels1.png' },
    { path: '../assets/Carousels2.jpg' },
    { path: '../assets/Carousels3.png' },
  ];
  dynamicCarousel:any=[this.carousels[0]];



  carouselsUpdater() {
    let count = 0;
    // setInterval(() => {
    //   this.dynamicCarousel.pop();
    //   this.dynamicCarousel.push(this.carousels[count]);
    //   count++;
    //   count >= this.carousels.length ? (count = 0) : '';
    // }, 5000);
  }
}
