import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatBottomSheetModule],
  exports: [
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatBottomSheetModule,
  ],
})
export class MaterialModule {}
