import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { Global } from './global';


const headers = new HttpHeaders().append("x-rapidapi-key", "665ed21c81msh061a123159a7203p1bb178jsn2ddffd2c7093");

@Injectable()
export class JugadorService {

    public url:string;
   // public headers:string;

    constructor (
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

 
    getJugadores():Observable<any>{
        return this._http.get(this.url+'players', {headers} )
    }
}