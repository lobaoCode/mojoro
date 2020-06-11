import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banco-crud',
  templateUrl: './banco-crud.component.html',
  styleUrls: ['./banco-crud.component.css']
})
export class BancoCrudComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigateToBancoCreate():void {
    this.router.navigate(['/banco/movimentacao']);
  }


}
