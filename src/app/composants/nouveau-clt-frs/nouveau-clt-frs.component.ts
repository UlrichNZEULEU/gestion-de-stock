import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-nouveau-clt-frs',
  templateUrl: './nouveau-clt-frs.component.html',
  styleUrl: './nouveau-clt-frs.component.css'
})
export class NouveauCltFrsComponent implements OnInit{

  origin = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {
      this.origin = data['origin'];
    })
  }
  
  saveClick(): void {
  }
  cancelClick(): void {
    if(this.origin ==='client'){
      this.router.navigate(['clients'])

    }else if( this.origin ==='fournisseur'){
      this.router.navigate(['fournisseurs'])
    }
  }

}
