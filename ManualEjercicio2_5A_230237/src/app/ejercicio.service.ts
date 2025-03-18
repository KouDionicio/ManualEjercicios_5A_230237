import { Injectable } from '@angular/core';

interface Ejercicio {
  titulo: string;
  unidad: string;
  descripcion: string;
  objetivo: string;
}

@Injectable({
  providedIn: 'root',
})
export class EjercicioService {

  private ejercicios: { [key: string]: Ejercicio } = {
    'Ejercicio 1': {
      titulo: 'Components in Angular',
      unidad: 'Unidad 2',
      descripcion: 'En este ejercicio aprenderemos sobre los componentes en Angular, que son los bloques de construcción de las aplicaciones. Un componente consta de tres partes principales: la clase, la plantilla y los estilos.',
      objetivo: 'Aprender a crear y usar componentes en Angular.',
    },
    'Ejercicio 2': {
      titulo: 'Updating the Component Class',
      unidad: 'Unidad 2',
      descripcion: 'En este ejercicio aprenderemos cómo actualizar la clase de un componente en Angular, permitiendo la interactividad con las plantillas y gestionando las propiedades y métodos.',
      objetivo: 'Actualizar la clase de un componente y agregarle interactividad.',
    },
    'Ejercicio 3': {
      titulo: 'Composing Components',
      unidad: 'Unidad 2',
      descripcion: 'En este ejercicio se explorará cómo componer componentes en Angular, utilizando la comunicación entre componentes y su integración en una aplicación.',
      objetivo: 'Componer varios componentes para construir aplicaciones más grandes.',
    },
    'Ejercicio 4': {
      titulo: 'Control Flow in Components - @if',
      unidad: 'Unidad 2',
      descripcion: 'Este ejercicio se centra en cómo controlar el flujo de la aplicación en los componentes utilizando la directiva `*ngIf` para mostrar u ocultar elementos de la vista.',
      objetivo: 'Aprender a usar `*ngIf` para controlar la visibilidad de los elementos.',
    },
    'Ejercicio 5': {
      titulo: 'Control Flow in Components - @for',
      unidad: 'Unidad 2',
      descripcion: 'En este ejercicio aprenderemos a usar la directiva `*ngFor` para iterar sobre colecciones y mostrar listas dinámicas en la vista.',
      objetivo: 'Utilizar `*ngFor` para iterar sobre listas y crear vistas dinámicas.',
    },
    'Ejercicio 6': {
      titulo: 'Property Binding in Angular',
      unidad: 'Unidad 2',
      descripcion: 'Este ejercicio trata sobre el enlace de propiedades en Angular, donde los valores de las propiedades de los componentes se pueden enlazar directamente con las propiedades de los elementos HTML.',
      objetivo: 'Aprender a usar el enlace de propiedades para conectar los datos del componente con la vista.',
    },
    'Ejercicio 7': {
      titulo: 'Event Handling',
      unidad: 'Unidad 2',
      descripcion: 'En este ejercicio, aprenderemos cómo manejar eventos del usuario, como clics y entradas de teclado, para interactuar con la aplicación.',
      objetivo: 'Manejar eventos en Angular para interactuar con los usuarios.',
    },
    'Ejercicio 8': {
      titulo: 'Component Communication with @Input',
      unidad: 'Unidad 2',
      descripcion: 'Este ejercicio explica cómo pasar datos desde un componente padre a un componente hijo utilizando el decorador `@Input` en Angular.',
      objetivo: 'Aprender a utilizar `@Input` para la comunicación entre componentes.',
    },
    'Ejercicio 9': {
      titulo: 'Component Communication with @Output',
      unidad: 'Unidad 2',
      descripcion: 'En este ejercicio veremos cómo enviar datos desde un componente hijo a un componente padre usando el decorador `@Output` y eventos en Angular.',
      objetivo: 'Usar `@Output` para emitir eventos y pasar datos entre componentes.',
    },
    'Ejercicio 10': {
      titulo: 'Deferrable Views',
      unidad: 'Unidad 2',
      descripcion: 'En este ejercicio aprenderemos sobre las vistas diferidas en Angular, una técnica para optimizar el rendimiento de la aplicación cargando componentes bajo demanda.',
      objetivo: 'Implementar vistas diferidas en Angular para mejorar el rendimiento.',
    },
    'Ejercicio 11': {
      titulo: 'Optimizing images',
      unidad: 'Unidad 2',
      descripcion: 'Este ejercicio trata sobre la optimización de imágenes en aplicaciones Angular, lo que mejora la velocidad de carga y la experiencia del usuario.',
      objetivo: 'Optimizar imágenes para mejorar el rendimiento de la aplicación.',
    },
    'Ejercicio 12': {
      titulo: 'Routing Overview',
      unidad: 'Unidad 2',
      descripcion: 'En este ejercicio aprenderemos sobre el enrutamiento en Angular, permitiendo navegar entre diferentes vistas o páginas dentro de una aplicación Angular.',
      objetivo: 'Implementar y gestionar rutas para la navegación en aplicaciones Angular.',
    },
  };

  constructor() {}

  getEjercicioInfo(ejercicio: string): Ejercicio {
    return this.ejercicios[ejercicio] || {
      titulo: 'Selecciona un ejercicio',
      unidad: '',
      descripcion: '',
      objetivo: '',
    };
  }
}