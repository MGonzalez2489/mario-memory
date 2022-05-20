import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GlobalConstants } from '../common/global-constants';
import { Card, Game } from '../models';
import { GameService } from '../services/game.service';
import { StrikePanelComponent } from './components/strike-panel/strike-panel.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  cards: Array<Card> = new Array<Card>();
  evaluationCard: Array<Card> = new Array<Card>();
  game: Game = new Game();
  constructor(
    private gService: GameService,
    private _bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.gService.generateGameCards();
    this.cards = this.gService.gameCards;
  }

  openedCardEvent(event: Card) {
    console.log('card opened', event);

    if (this.evaluationCard.length == 0) {
      this.evaluationCard.push(event);
      return;
    } else {
      let prevCard = this.evaluationCard[0];
      if (prevCard.id != event.id) {
        this.openStrikePanel(prevCard, event);
      }
    }
  }

  openStrikePanel(card1: Card, card2: Card) {
    let panel = this._bottomSheet.open(StrikePanelComponent, {
      data: { card1, card2 },
    });
    panel.afterDismissed().subscribe((data) => {
      card1.isOpened = false;
      card2.isOpened = false;

      this.evaluationCard = new Array<Card>();
      this.game.strikeCount++;
    });
  }
}
