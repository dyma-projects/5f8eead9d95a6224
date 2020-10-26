import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() compteur: number;
  @Output('onChange') changeEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  increment(): void{
    this.compteur++;
    this.changeEvent.emit(this.compteur);
  }

  decrement(): void{
    this.compteur--;
    this.changeEvent.emit(this.compteur);
  }
}
