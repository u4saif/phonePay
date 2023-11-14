import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mplayer';
  color: ThemePalette = 'primary';
  checked = true;
  disabled = false;

  toggleTheme(){
    this.checked=!this.checked;
    console.log("🚀 ~ file: app.component.ts:17 ~ AppComponent ~ toggleTheme ~ ̥:" )
  }
}
