import { BancoService } from './../banco.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banco-create',
  templateUrl: './banco-create.component.html',
  styleUrls: ['./banco-create.component.css']
})
export class BancoCreateComponent implements OnInit {

  constructor(private bancoService: BancoService, private router: Router) { }

  ngOnInit(): void {
  }

  realizarMovimentacao():void{
    this.bancoService.showMessage('Operação realizada com sucesso!');
  }
  cancelar():void{
    this.router.navigate(['/banco']);
  }

}
