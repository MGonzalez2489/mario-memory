import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../_material/-material.module';

@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class ResultsModule {}
