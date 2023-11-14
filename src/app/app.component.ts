import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    this.carouselsUpdater();
  }
  title = 'mplayer';
  color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  carousels =[
    {"path":"../assets/Carousels1.png"},
    {"path":"../assets/Carousels2.jpg"},
    {"path":"../assets/Carousels3.png"},
  ];
  carouselsUrl = this.carousels[0].path;


  toggleTheme(){
    this.checked=!this.checked;
  }

 
  carouselsUpdater(){
    let count = 0;
    setInterval(() => {
      this.carouselsUrl = this.carousels[count].path;
      count++;
      (count >= this.carousels.length) ?  count = 0 : '';
    }, 3000);
  }
}
