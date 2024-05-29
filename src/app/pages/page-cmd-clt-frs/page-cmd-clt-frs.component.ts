import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-cmd-clt-frs',
  templateUrl: './page-cmd-clt-frs.component.html',
  styleUrl: './page-cmd-clt-frs.component.css'
})
export class PageCmdCltFrsComponent implements OnInit {

  constructor( private router: Router){}

  ngOnInit(): void {
  }

  nouvelleCommande():void {
    this.router.navigate(['nouvellecommandesclt']);
  }

}
