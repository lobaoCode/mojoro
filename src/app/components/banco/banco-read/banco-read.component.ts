import { BancoService } from './../banco.service';
import { Banco } from './../model/banco';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banco-read',
  templateUrl: './banco-read.component.html',
  styleUrls: ['./banco-read.component.css']
})
export class BancoReadComponent implements OnInit {

  bancos: Banco[];

  constructor(private bancoService: BancoService) { }

  ngOnInit(): void {
    this.bancoService.read().subscribe(bancos => {
      this.bancos = bancos;
    });
  }

}
