import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-article',
  templateUrl: './page-article.component.html',
  styleUrl: './page-article.component.css'
})
export class PageArticleComponent implements OnInit{
  clickEvent: any;

  constructor(  private router: Router){

  }

  ngOnInit(): void{}

  nouvelArticle() {
    this.router.navigate(['nouvelarticle']);
  }


}
