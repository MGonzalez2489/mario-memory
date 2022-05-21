import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Card, Game } from '../_shared/models';
import { GameService } from '../_shared/services/game.service';
import { StrikePanelComponent } from './components/strike-panel/strike-panel.component';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit, OnDestroy {
  game: Game = new Game();
  gameSubscription: Subscription = new Subscription();
  constructor(
    private gService: GameService,
    private _bottomSheet: MatBottomSheet,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.gameSubscription = this.gService
      .startGame()
      .subscribe((game: Game) => {
        this.game = game;
      });
  }
  ngOnDestroy(): void {
    this.gameSubscription.unsubscribe();
  }

  openedCardEvent(event: Card) {
    if (!this.gService.hasCardToCompare()) {
      this.gService.addCardToCompare(event);
      return;
    }

    if (this.gService.cardsAreEqual(event)) {
      this.gService.addScorePoint();
      this.gService.restartCardsToCompare();
      setTimeout(() => {
        if (this.gService.hasWin()) {
          alert('ganaste');
        }
      }, 500);
    } else {
      //strike
      this.gService.addScoreStrike();
      this.openStrikePanel(this.gService.cardsToCompare[0], event);
      this.gService.restartCardsToCompare();
    }
  }

  openStrikePanel(card1: Card, card2: Card) {
    let panel = this._bottomSheet.open(StrikePanelComponent, {
      data: { card1, card2 },
    });
    panel.afterDismissed().subscribe((data) => {
      this.gService.restartCardsToCompare();
      card1.setClosed();
      card2.setClosed();
      if (this.gService.hasLose()) {
        alert('perdiste');
      }
    });
  }
}
