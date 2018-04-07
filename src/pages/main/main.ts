import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ReportesPage } from '../reportes/reportes';
import { CartaAsignacionPage } from '../carta-asignacion/carta-asignacion';
import { BotonPanicoPage } from '../boton-panico/boton-panico';
import { NormatividadPage } from '../normatividad/normatividad';
import { ModificarPerfilPage } from '../modificar-perfil/modificar-perfil';


@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  private rootPage;
  private reportes;
  private carta_asignacion;
  private boton_panico;
  private normatividad;
  private modificar_perfil;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.reportes = ReportesPage;
    this.carta_asignacion = CartaAsignacionPage;
    this.boton_panico =BotonPanicoPage;
    this.normatividad = NormatividadPage;
    this.modificar_perfil = ModificarPerfilPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  //este metodo sera para abrir una en especifico
  //sin el inappbrowser
  openPage(p){
    this.rootPage = p;
  }
  //el metodo recibe el link como parametro
  openLink(link : string){

  }

}
