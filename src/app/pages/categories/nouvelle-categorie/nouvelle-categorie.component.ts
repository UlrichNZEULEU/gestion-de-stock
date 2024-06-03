import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-categorie',
  templateUrl: './nouvelle-categorie.component.html',
  styleUrl: './nouvelle-categorie.component.css'
})
export class NouvelleCategorieComponent {
 constructor( private router: Router){}

  cancel() {
    this.router.navigate(['categories']);
  }

}
