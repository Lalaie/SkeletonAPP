import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private cardB!: Animation;
  private cardC!: Animation;

  series = [
    {
      nombre: 'Dragon Ball',
      imagen: '/assets/img/series/dragonball.jpeg'
    },
    {
      nombre: 'Naruto',
      imagen: '/assets/img/series/naruto.jpg'
    },
    {
      nombre: 'One Piece',
      imagen: '/assets/img/series/onepiece.jpeg'
    },
    {
      nombre: 'Mob Psycho',
      imagen: '/assets/img/series/mobpsycho.jpg'
    }
  ];

  constructor(private animationCtrl: AnimationController) { }

  ngAfterViewInit() {
    if(this.card){
      this.cardB = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .fill('none')
        .duration(1000)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '1' },
          { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
          { offset: 1, transform: 'scale(1)', opacity: '1' },
        ]);

      this.cardC = this.animationCtrl
        .create()
        .addElement(this.card.nativeElement)
        .fill('none')
        .duration(1000)
        .keyframes([
          { offset: 0, transform: 'scale(1)', opacity: '0.5' },
          { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
          { offset: 1, transform: 'scale(1)', opacity: '0.5' },
        ]);
    }
  }


  visto() {
    this.cardB.play();
  }

  tarde() {
    this.cardC.play();
  }


  ngOnInit() {
  }

}
