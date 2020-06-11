import { Banco } from './model/banco';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  baseUrl = 'http://localhost:3333/users'

  constructor(private snackBar: MatSnackBar, private http: HttpClient){ }

  showMessage(message: string) :void{
    this.snackBar.open(message, 'X', {
       duration: 3000, 
       horizontalPosition: "right", 
       verticalPosition: "top"})
  }


  read():Observable<Banco[]> {
    return this.http.get<Banco[]>(this.baseUrl);
  }

}
