import { Component, OnInit } from '@angular/core';
import { Pregunta, preguntasService } from '../../preguntasService/preguntas';

@Component({
  selector: 'app-quien-quiere-ser',
  templateUrl: './quien-quiere-ser.component.html',
  styleUrl: './quien-quiere-ser.component.scss'
})
export class QuienQuiereSerComponent implements OnInit {
  preguntas: Pregunta[] = [];
  preguntaIndex: number = 0;
  puntaje: number = 0;
  juegoTerminado: boolean = false;
  opcionesActuales: string[] = [];

  mensaje: string = "";

  constructor(private PreguntasService: preguntasService){}

  ngOnInit(): void{
    this.preguntas = this.PreguntasService.getPreguntas();
  }

  cargarPregunta(){
    const preguntaActual = this.preguntas[this.preguntaIndex];
    this.opcionesActuales = [...preguntaActual.opciones];

  }

  reiniciarJuego(): void{
    this.preguntaIndex = 0;
    this.puntaje = 0;
    this.juegoTerminado = false;
  }

  verificarRespuesta(respuesta: string): void{
    const preguntaActual = this.preguntas[this.preguntaIndex];
    if(respuesta === preguntaActual.respuestaCorrecta){
      this.puntaje+=50;
      this.preguntaIndex++;
      if (this.preguntaIndex >= this.preguntas.length){
        this.juegoTerminado = true;
      }else{
        this.cargarPregunta
      }
    }else{
      this.mensaje = 'Respuesta Incorrecta';
      this.reiniciarJuego();
    }
  }
}
