import { Component,EventEmitter, Input, OnInit, Output, input } from '@angular/core';

@Component({
  selector: 'app-boutton-action',
  templateUrl: './boutton-action.component.html',
  styleUrl: './boutton-action.component.css'
})
export class BouttonActionComponent implements OnInit{
  
  @Input()
  isNouveauVisible: boolean = true;
  @Input()
  isExporterVisible: boolean = true;
  @Input()
  isImporterVisible: boolean = true;

  constructor(){}

  @Output()                                                 // j'envoie un evenement du fils vers le parent
  clickEvent = new EventEmitter();

  ngOnInit():void{}

  bouttonNouveauClick(): void {
    this.clickEvent.emit();
  }

}
