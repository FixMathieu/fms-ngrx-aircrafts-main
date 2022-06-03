import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllAircraftsAction, GetDesignedAircraftsAction, GetDevelopmentAircraftsAction, GetProductionAircraftsAction, SearchAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { AircraftService } from 'src/app/services/aircraft.service';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  constructor(private store:Store<any>, private service:AircraftService) { //injection du store en spécifiant ou pas le type du state
  }
 
  ngOnInit(): void {
  }
  getAllAircrafts(){
    //User a cliqué sur le bouton afficher tous les produits aussi il faut dispatcher l'action à l'aide du store
    this.store.dispatch(new GetAllAircraftsAction({}));
    //Le reducer et l'effect ont reçu la notification du Store et ils ont pris le relais chacun de son côté   
    this.service.setFlagLine(false) ;
  }
  
  getDesignAircrafts(){
  this.store.dispatch(new GetDesignedAircraftsAction({})); 
   
  this.service.setFlagLine(true);
  }

  getDeveloppementAircrafts(){
    this.store.dispatch(new GetDevelopmentAircraftsAction({}));
    this.service.setFlagLine(false) ;
  }
  getProductionAircrafts(){
    this.store.dispatch(new GetProductionAircraftsAction({}));
    this.service.setFlagLine(false) ;
  }

  onSearch(value : any){
    this.store.dispatch(new SearchAircraftsAction(value.keyword));
    //on transmet le mot clé du formulaire
  }


}

