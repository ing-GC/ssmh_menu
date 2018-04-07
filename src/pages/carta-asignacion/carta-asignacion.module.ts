import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartaAsignacionPage } from './carta-asignacion';

@NgModule({
  declarations: [
    CartaAsignacionPage,
  ],
  imports: [
    IonicPageModule.forChild(CartaAsignacionPage),
  ],
})
export class CartaAsignacionPageModule {}
