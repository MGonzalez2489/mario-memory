import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Card } from '../models';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  cards: Array<Card> = new Array<Card>();
  constructor(private gService: GameService) {}

  ngOnInit(): void {
    this.gService.generateGameCards();
    this.cards = this.gService.gameCards;
  }
}
