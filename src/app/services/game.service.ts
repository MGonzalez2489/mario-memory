import { Injectable } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
import { Card, Game } from '../models';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  game: Game = new Game();
  gameCards: Array<Card> = new Array<Card>();

  constructor() {}

  generateGameCards() {
    let count = 5;
    let images = this.getImagesArray();
    let cardsResult = new Array<Card>();
    for (let i = 0; i <= count - 1; i++) {
      let newCard = new Card();
      newCard.id = i + 1;
      newCard.img = images[i];
      cardsResult.push(newCard);

      let shadowCard = new Card();
      shadowCard.id = newCard.id;
      shadowCard.img = newCard.img;
      cardsResult.push(shadowCard);
    }
    this.gameCards = this.shuffleCards(cardsResult);
    console.log('cards', this.gameCards);
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
