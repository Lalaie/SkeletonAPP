import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerMasTardePageRoutingModule } from './ver-mas-tarde-routing.module';

import { VerMasTardePage } from './ver-mas-tarde.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerMasTardePageRoutingModule
  ],
  declarations: [VerMasTardePage]
})
export class VerMasTardePageModule {}
