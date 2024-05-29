import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categories',
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.css'
})
export class PageCategoriesComponent implements OnInit {
  
  constructor( private router: Router){}

  ngOnInit(): void {
  }

  nouvelCategorie(): void {
    this.router.navigate(['nouvelcategorie']);
  }

}
