import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerMasTardePage } from './ver-mas-tarde.page';

const routes: Routes = [
  {
    path: '',
    component: VerMasTardePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerMasTardePageRoutingModule {}
