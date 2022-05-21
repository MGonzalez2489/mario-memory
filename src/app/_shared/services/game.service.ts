import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/_common/global-constants';
import { Card, Game } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  //private game$: Observable<Game> = new Observable<Game>();
  game: BehaviorSubject<Game> = new BehaviorSubject<Game>(new Game());
  game$: Observable<Game> = this.game.asObservable();

  cardsToCompare: Array<Card> = new Array<Card>();
  constructor() {}

  startGame() {
    let newGame = new Game();
    newGame.cards = this.generateGameCards();
    this.game.next(newGame);
    return this.game$;
  }
  //EvaluateGame
  hasWin(): boolean {
    return this.game.value.score == 5;
  }
  hasLose(): boolean {
    return this.game.value.strikeCount == 3;
  }

  //Score
  addScoreStrike() {
    this.game.value.strikeCount++;
  }
  addScorePoint() {
    this.game.value.score++;
  }

  //cards comparation

  addCardToCompare(c: Card): void {
    this.cardsToCompare.push(c);
  }
  hasCardToCompare(): boolean {
    return this.cardsToCompare.length == 0 ? false : true;
  }
  cardsAreEqual(secondCard: Card): boolean {
    let prevCard = this.cardsToCompare[0];
    return prevCard.id == secondCard.id;
  }
  restartCardsToCompare(): void {
    this.cardsToCompare = new Array<Card>();
  }
  //Cards
  private generateGameCards() {
    let count = 5; //this value will be replaced by difficulty property
    let images = this.getImagesArray();
    let cardsResult = new Array<Card>();
    for (let i = 0; i <= count - 1; i++) {
      let newCard = new Card();
      newCard.id = i + 1;
      newCard.img = images[i];
      newCard.isOpened = false;
      cardsResult.push(newCard);

      let shadowCard = new Card();
      shadowCard.id = newCard.id;
      shadowCard.img = newCard.img;
      shadowCard.isOpened = false;
      cardsResult.push(shadowCard);
    }
    return this.shuffleCards(cardsResult);
  }

  private getImagesArray() {
    return Object.keys(GlobalConstants.Images.Characters).map(function (key) {
      return GlobalConstants.Images.Characters[key];
    });
  }

  private shuffleCards(array: Array<Card>) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
}
