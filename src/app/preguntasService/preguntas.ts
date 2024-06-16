import { Injectable } from "@angular/core";

export interface Pregunta{
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: string;
}

@Injectable({
  providedIn: 'root'
})

export class preguntasService {
  private preguntas: Pregunta[] = [
    {
      //1
      pregunta: "¿Qué tipo de animal es una libélula?",
      opciones: ["A) Mamífero", "B) Insecto", "C) Reptil", "D) Ave"],
      respuestaCorrecta: "B"
    },
    {
      //2
      pregunta: "¿Cuál de los siguientes sería atraído por un imán?",
      opciones: ["A) Metal", "B) Plástico", "C) Madera", "D) El hombre equivocado"],
      respuestaCorrecta: "A"
    },
    {
      //3
      pregunta: "¿Cuál de estos nombres no aparece en el título de una obra de Shakespeare?",
      opciones: ["A) Hamlet", "B) Romeo", "C) Macbeth", "D) Darren"],
      respuestaCorrecta: "D"
    },
    {
      //4
      pregunta: "¿Cuál es el lugar de origen del whisky escocés?",
      opciones: ["A) Irlanda", "B) Gales", "C) Estados Unidos", "D) Escocia"],
      respuestaCorrecta: "D"
    },
    {
      //5
      pregunta: "¿Qué nombre tiene tradicionalmente la fiesta que se hace a una mujer que espera un bebé?",
      opciones: ["A) Baby drizzle", "B) Baby Shower", "C) Baby downpour", "D) Baby deluge"],
      respuestaCorrecta: "B"
    },
    {
      //6
      pregunta: "En los hoteles elegantes, ¿qué snack suele dejarse sobre las almohadas?",
      opciones: ["A) Un pretzel", "B) Una manzana", "C) Una menta", "D) Una foto de Wolf Blitzer"],
      respuestaCorrecta: "C"
    },
    {
      //7
      pregunta: "¿Cuál es la forma tradicional apropiada para dirigirse a un juez en Estados Unidos?",
      opciones: ["A) Su santidad", "B) Su señoría", "C) Su eminencia", "D) ¡Mi amigo!"],
      respuestaCorrecta: "B"
    },
    {
      //8
      pregunta: "¿Cuáles de estas aplicaciones ofrecen más o menos el mismo tipo de servicio?",
      opciones: ["A) Snapchat y Grubhub", "B) Whatsapp y SHAREit", "C) TikTok y Spotify", "D) Lyft y Uber"],
      respuestaCorrecta: "D"
    },
    {
      //9
      pregunta: "En un restaurante, si alguien 'invita', ¿qué hace?",
      opciones: ["A) Besa la cuenta", "B) Rompe la cuenta", "C) Espera 'tener suerte'", "D) Paga la cuenta"],
      respuestaCorrecta: "D"
    },
    {
      //10
      pregunta: "¿En cuál de estas películas Whoopi Goldberg aparece vestida de monja?",
      opciones: ["A) Cambio de hábito", "B) Ghost", "C) El color púrpura", "D) How Judas got his Groove Back"],
      respuestaCorrecta: "A"
    }
  ];
    constructor(){}

    getPreguntas(): Pregunta[]{
      return this.preguntas;
    }
}
