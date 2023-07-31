import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictadoresPage } from './dictadores.page';

const routes: Routes = [
  {
    path: '',
    component: DictadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DictadoresPageRoutingModule {}
