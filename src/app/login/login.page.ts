import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ServicioDBService } from 'src/app/services/servicio-db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formData = {
    Usuario:'',
    Password: ''
  }

  usuarios: any[] = [];
  
  constructor(private router: Router, private dbService: ServicioDBService) { }

  async ngOnInit() {
    await this.dbService.initDB();
    await this.loadUsers();
  }

  async addUser(event: Event) {
    event.preventDefault();

    await this.dbService.addItem(this.formData.Usuario, this.formData.Password);

    this.formData.Usuario = '';
    this.formData.Password = '';
  }

  async loadUsers(){
    this.usuarios = await this.dbService.getAllUsers();
  }

  async deleteUser(id: number){
    await this.dbService.deleteUser(id);
    await this.loadUsers();
  }

  enviarDatos(){
    let navigationExtras: NavigationExtras = {
      state: {
        UsuarioEnviado: this.formData.Usuario,
        PasswordEnviada: this.formData.Password
      }
    }
    this.router.navigate(['/home'], navigationExtras);
    localStorage.setItem('user', this.formData.Usuario);
  }
}
