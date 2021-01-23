import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  providers: [JugadorService]
})
export class ConsultaComponent implements OnInit {

  public jugadores: Jugador[];

  constructor(
     private _jugadorService: JugadorService
  ) { }

  ngOnInit(): void {
    this._jugadorService.getJugadores().subscribe(
      response => {
        console.log(response.data);
        this.jugadores = response.data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
