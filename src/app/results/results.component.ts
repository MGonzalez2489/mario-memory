import { Component, OnInit } from '@angular/core';
import { Game } from '../_shared/models';
import { GameService } from '../_shared/services/game.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  hasWin: boolean = false;
  game: Game = new Game();
  constructor(private gService: GameService) {}

  ngOnInit(): void {
    this.game = this.gService.game.value;
    this.hasWin = this.gService.hasWin();
  }
}
