import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITarea } from './ITareas';

@Component({
  selector: 'app-primerapantalla',
  templateUrl: './primerapantalla.component.html',
  styleUrls: ['./primerapantalla.component.scss']
})
export class PrimerapantallaComponent implements OnInit {
  idActual?: number
  tareas: ITarea[] = [{
    id: 1,
    descripcion: "Impartir clase de Programacion web II",
    realizada: false
  },
  {
    id: 2,
    descripcion: "Preparar examen segundo parcial",
    realizada: true
  },
  {
    id: 3,
    descripcion: "Revisar avance de proyecto",
    realizada: false
  }
]

  tareasSeleccionadas: ITarea[] = this.tareas

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.idActual = params['id'];
      if(this.idActual){
        this.filtrarPorId(this.idActual)
      }
    });
  }

  filtrarPorId(id: number){
    this.tareasSeleccionadas = this.tareas.filter(tarea => tarea.id == id)
  }

}
