import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameBoardRoutingModule } from './game-board-routing.module';
import { GameBoardComponent } from './game-board.component';
import { CardComponent } from './components/card/card.component';
import { StrikePanelComponent } from './components/strike-panel/strike-panel.component';
import { MaterialModule } from '../_material/-material.module';

@NgModule({
  declarations: [GameBoardComponent, CardComponent, StrikePanelComponent],
  imports: [CommonModule, GameBoardRoutingModule, MaterialModule],
})
export class GameBoardModule {}
