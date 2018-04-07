import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { BotonPanicoPage } from '../pages/boton-panico/boton-panico';
import { CartaAsignacionPage } from '../pages/carta-asignacion/carta-asignacion';
import { ModificarPerfilPage } from '../pages/modificar-perfil/modificar-perfil';
import { NormatividadPage } from '../pages/normatividad/normatividad';
import { ReportesPage } from '../pages/reportes/reportes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    BotonPanicoPage,
    CartaAsignacionPage,
    ModificarPerfilPage,
    NormatividadPage,
    ReportesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
