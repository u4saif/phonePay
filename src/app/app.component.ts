import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
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
export class AppComponent {
  title = 'mplayer';
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;

  toggleTheme() {
    this.checked = !this.checked;
  }
}
