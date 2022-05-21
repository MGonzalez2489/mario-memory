export class Card {
  id: number = 0;
  img: string = '';
  isOpened: boolean = false;
  state: string = 'default';

  setOpened() {
    this.isOpened = true;
    this.state = 'flipped';
  }
  setClosed() {
    this.isOpened = false;
    this.state = 'default';
  }
}
