import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrl: './page-utilisateur.component.css'
})
export class PageUtilisateurComponent implements OnInit {
  
  constructor( private router: Router){}
  ngOnInit(): void {
  }
  nouvelUtilisateur(): void {
    this.router.navigate(['nouvelutilisateur'])
  }

}
