import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  a(){
    var game = {
        dificultad:1, // pueden ser mas
        strikes:0,//pueden ser 3
        matches:[]
    };
    var card ={
      id:'',//puede ser numerico o guid (aun no se para que)
      img:'',//viene de url desde git
      isOpened:false,//solo para voltear/ocultar cards
    }
  }
}
