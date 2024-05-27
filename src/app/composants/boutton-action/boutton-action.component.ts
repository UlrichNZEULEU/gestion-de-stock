import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrl: './boutton-action.component.css'
})
export class BouttonActionComponent implements OnInit{

  @Output()                                                 // j'envoie un evenement du fils vers le parent
  clickEvent = new EventEmitter();

  constructor(){

  }

  ngOnInit():void{

  }
  

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }

}
