import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VistoPage } from './visto.page';

const routes: Routes = [
  {
    path: '',
    component: VistoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VistoPageRoutingModule {}
