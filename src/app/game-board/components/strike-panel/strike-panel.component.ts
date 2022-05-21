import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-strike-panel',
  templateUrl: './strike-panel.component.html',
  styleUrls: ['./strike-panel.component.scss'],
})
export class StrikePanelComponent implements OnInit {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {}

  ngOnInit(): void {
  }

  open() {}
}
