import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  UsuarioRecibido: string ="";
  PasswordRecibida: string ="";

  educacion:any[]=[
    {id:1, nivel:"Educación Incompleta"},
    {id:2, nivel:"Basica Completa"},
    {id:3, nivel:"Media Completa"},
    {id:4, nivel:"Superior Completa"}
  ]

  formHome = {
    Nombre:'',
    Apellido:'',
    Nivel:'',
    Fecha:''
  }

  constructor(private activaterouter: ActivatedRoute, private router: Router) {
    this.activaterouter.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation()?.extras?.state){
        this.UsuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['UsuarioEnviado'];
        this.PasswordRecibida = this.router.getCurrentNavigation()?.extras?.state?.['PasswordEnviada'];
      }
    })
  }

  submitForm(){
  }

}
