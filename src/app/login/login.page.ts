import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData = {
    Usuario:'',
    Password:''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enviarDatos(){
    let navigationExtras: NavigationExtras = {
      state: {
        UsuarioEnviado: this.formData.Usuario,
        PasswordEnviada: this.formData.Password
      }
    }
    this.router.navigate(['/home'], navigationExtras);
  }
}
