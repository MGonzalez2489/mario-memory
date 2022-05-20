import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Card } from 'src/app/models';

@Component({
  selector: 'app-strike-panel',
  templateUrl: './strike-panel.component.html',
  styleUrls: ['./strike-panel.component.scss'],
})
export class StrikePanelComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private bottomSheetRef: MatBottomSheetRef<StrikePanelComponent>
  ) {}
  //constructor(
  //public data: any,
  //private _bottomSheetRef: MatBottomSheetRef<StrikePanelComponent>
  //) {}

  ngOnInit(): void {
    console.log('data', this.data);
  }

  open() {}
}
