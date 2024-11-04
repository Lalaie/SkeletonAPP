import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VistoPageRoutingModule } from './visto-routing.module';

import { VistoPage } from './visto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VistoPageRoutingModule
  ],
  declarations: [VistoPage]
})
export class VistoPageModule {}
