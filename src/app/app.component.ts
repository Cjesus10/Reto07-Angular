import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario = 'Angular';
  password = "123456";
  resultado = false;
  mensaje = "";
  enlaces = ["Home", "Support", "Contact"]

Validar(user:string, pass:string){
  if(user == this.usuario && pass == this.password){
    this.resultado = true;
    this.mensaje = "Bienvenido";
  }
  else{
    this.resultado = false;
    this.mensaje = "Credenciales incorrectas, intentelo de nuevo";
  }
}
}
