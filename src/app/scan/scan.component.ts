import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit{

  isScanCompleted:any;
  ngOnInit(): void {
     
  }

  divclicked(eventAction:any){
    this.isScanCompleted=eventAction.data.value;
    console.log("🚀 ~ file: scan.component.ts:17 ~",eventAction)
  }
}
