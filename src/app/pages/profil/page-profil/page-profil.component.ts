import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrl: './page-profil.component.css'
})
export class PageProfilComponent implements OnInit {

  constructor( private router: Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  modifierMotDePasse():void {
    this.router.navigate(['changermotdepasse']);
  }

}
