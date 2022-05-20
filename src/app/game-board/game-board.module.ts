import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameBoardRoutingModule } from './game-board-routing.module';
import { GameBoardComponent } from './game-board.component';
import { MaterialModule } from '../-material/-material.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [GameBoardComponent, CardComponent],
  imports: [CommonModule, GameBoardRoutingModule, MaterialModule],
})
export class GameBoardModule {}
