import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 , transform:'translateX(25px)'})),
      transition('void=>*', [animate(2000)]),
      transition('*=>void', [animate(2000)]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.carouselsUpdater();
  }
  title = 'mplayer';
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  carousels = [
    { path: '../assets/Carousels1.png' },
    { path: '../assets/Carousels2.jpg' },
    { path: '../assets/Carousels3.png' },
  ];
  dynamicCarousel:any=[this.carousels[0]];

  toggleTheme() {
    this.checked = !this.checked;
  }

  carouselsUpdater() {
    let count = 0;
    setInterval(() => {
      this.dynamicCarousel.pop();
      this.dynamicCarousel.push(this.carousels[count]);
      count++;
      count >= this.carousels.length ? (count = 0) : '';
    }, 5000);
  }
}
