import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TimeoutError } from 'rxjs';
import {Router} from '@angular/router';
import { Menu } from './menu';
import { URL } from 'url';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'

})
export class MenuComponent implements OnInit{
  
  public menuProperties: Array<Menu> = [
    {
        id:'1',
        titre:'Tableau de bord',
        icon:'fas fa-chart-line',
        url:'',
        sousMenu:[
          {
            id:'11',
            titre:'Vue d\'ensemble',
            icon:'fas fa-chart-pie',
            url:''
          },
          {
            id:'12',
            titre:'Statistique',
            icon:'fas fa-chart-bar',
            url:'statistiques'
          }
        ]
      },
      {
        id:'2',
        titre:'Articles',
        icon:'fas fa-boxes',
        url:'',
        sousMenu:[
          {
            id:'21',
            titre:'Articles',
            icon:'fas fa-boxes',
            url:'articles'
          },
          {
            id:'22',
            titre:'Mouvements de stocks',
            icon:'fab fa-stack-overflow',
            url:'mvtstk'
          }
        ]
      },
      {
        id:'3',
        titre:'Clients',
        icon:'fas fa-users',
        url:'',
        sousMenu:[
          {
            id:'31',
            titre:'clients',
            icon:'fas fa-shopping-basket',
            url:'clients'
          },
          {
            id:'32',
            titre:'Commandes clients',
            icon:'fas fa-users',
            url:'commandesclients'
          }
        ]
      },
      {
        id:'4',
        titre:'Fournisseurs',
        icon:'fas fa-users',
        url:'',
        sousMenu:[
          {
            id:'41',
            titre:'Fournisseurs',
            icon:'fas fa-users',
            url:'fournisseurs'
          },
          {
            id:'42',
            titre:'Commandes fournisseurs',
            icon:'fas fa-truck',
            url:'comandesfournisseurs'
          }
        ]
      },
      {
        id:'5',
        titre:'Parametrages',
        icon:'fas fa-cogs',
        url:'',
        sousMenu:[
          {
            id:'51',
            titre:'Categories',
            icon:'fas fa-tools',
            url:'categories'
          },
          {
            id:'52',
            titre:'Utilisateurs',
            icon:'fas fa-users-cog',
            url:'utilisateurs'
          }
        ]
      }
    ];
  private lastSelectedMenu: Menu | undefined;

    
  constructor( private router: Router){}
  ngOnInit(): void {
  }
  navigate(menu: Menu): void {
    if(this.lastSelectedMenu){
      this.lastSelectedMenu.active = false;
    }
      menu.active = true;
      this.lastSelectedMenu = menu;
      this.router.navigate([menu.url]);
      
    
  }

}
