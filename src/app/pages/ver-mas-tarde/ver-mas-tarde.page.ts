import { Component, OnInit, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';


@Component({
  selector: 'app-ver-mas-tarde',
  templateUrl: './ver-mas-tarde.page.html',
  styleUrls: ['./ver-mas-tarde.page.scss'],
})
export class VerMasTardePage implements OnInit {
  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private cardB!: Animation;
  private cardC!: Animation;

  constructor(private animationCtrl: AnimationController) { }

  ngAfterViewInit() {
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


  visto() {
    this.cardB.play();
  }

  eliminar() {
    this.cardC.play();
  }

  ngOnInit() {
  }

}
