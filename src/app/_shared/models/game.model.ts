import { Card } from './card.model';

export class Game {
  difficulty: number = 1;
  strikeCount: number = 0;
  score: number = 0;
  cards: Array<Card> = new Array<Card>();
}
