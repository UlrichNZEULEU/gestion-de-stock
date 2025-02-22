import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nouvelle-cmd-clt-frs',
  templateUrl: './nouvelle-cmd-clt-frs.component.html',
  styleUrl: './nouvelle-cmd-clt-frs.component.css'
})
export class NouvelleCmdCltFrsComponent implements OnInit{

  origin = '';
  
  constructor(private router: Router, private activatedRoute: ActivatedRoute){}
  
  ngOnInit(): void {
    this.activatedRoute.data.subscribe( data => {
      this.origin = data['origin'];
    });
  }
  
  cancel() {
    this.router.navigate(['fournisseurs']);
  }
  
}
