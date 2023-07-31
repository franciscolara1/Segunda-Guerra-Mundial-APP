import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatallasPage } from './batallas.page';

const routes: Routes = [
  {
    path: '',
    component: BatallasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatallasPageRoutingModule {}
