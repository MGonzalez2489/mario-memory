import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  card: Card = new Card();
  constructor() {}

  ngOnInit(): void {}
}
