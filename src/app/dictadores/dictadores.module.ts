import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DictadoresPageRoutingModule } from './dictadores-routing.module';

import { DictadoresPage } from './dictadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DictadoresPageRoutingModule
  ],
  declarations: [DictadoresPage]
})
export class DictadoresPageModule {}
