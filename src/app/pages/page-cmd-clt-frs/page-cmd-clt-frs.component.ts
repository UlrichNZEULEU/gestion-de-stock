import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrl: './page-cmd-clt-frs.component.css'
})
export class PageCmdCltFrsComponent implements OnInit {
  origin ='';

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {
      this.origin = data['origin'];
    });
  }

  nouvelleCommande():void {
    if(this.origin === 'client'){
      this.router.navigate(['nouvellecommandesclt']);
    }else if(this.origin === 'fournisseur'){
      this.router.navigate(['nouvellecommandesfrs'])
    }
  }

}
