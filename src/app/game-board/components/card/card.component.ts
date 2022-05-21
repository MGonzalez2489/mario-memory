import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalConstants } from 'src/app/_common/global-constants';
import { Card } from 'src/app/_shared/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('200ms')]),
    ]),
  ],
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
    if (this.card.state === 'default') {
      this.card.state = 'flipped';
    } else {
      this.card.state = 'default';
    }

    this.card.isOpened = true;
    this.openedCard.emit(this.card);
  }
}
