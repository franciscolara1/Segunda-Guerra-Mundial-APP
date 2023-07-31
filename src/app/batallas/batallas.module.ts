import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatallasPageRoutingModule } from './batallas-routing.module';

import { BatallasPage } from './batallas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatallasPageRoutingModule
  ],
  declarations: [BatallasPage]
})
export class BatallasPageModule {}
