import { Component } from '@angular/core';
import {Store, Select} from '@ngxs/store';
import {AddName, BogotaAction, } from '../state/bogota.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Charla Angular';
  name = 'Aprendiendo Ngxs';


  constructor(private store: Store) {
    //store.dispatch(new BogotaAction(this.title)).subscribe( res => console.log(res));
    //store.dispatch(new AddName(this.name)).subscribe( res => console.log() );
  }



}
