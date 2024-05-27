import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-founisseur',
  templateUrl: './page-founisseur.component.html',
  styleUrl: './page-founisseur.component.css'
})
export class PageFounisseurComponent implements OnInit {
  constructor( private router: Router){}

ngOnInit(): void {
}

nouveauFournisseur():void {
  this.router.navigate(['nouveaufournisseur'])
}

}
