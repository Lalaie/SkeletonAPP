import { Component, ElementRef, ViewChildren, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { MenuController } from '@ionic/angular'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  user: any="";

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

  constructor(private animationCtrl: AnimationController, private router: Router, private menu: MenuController) {
  }

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1000)
      .iterations(1)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  async play() {
    await this.animation.play();
    this.animation.onFinish(this.animation.stop);
    this.clear()
  }

  clear() {
    this.formHome.Nombre = '';
    this.formHome.Apellido = '';
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.menu.close("mainMenu");
  }
}
