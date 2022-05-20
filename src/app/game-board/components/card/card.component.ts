import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { Card } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constants = GlobalConstants;

  @Input()
  card: Card = new Card();

  @Output()
  openedCard = new EventEmitter<Card>();

  constructor() {}

  ngOnInit(): void {}
  open() {
    this.card.isOpened = true;
    this.openedCard.emit(this.card);
  }
}
