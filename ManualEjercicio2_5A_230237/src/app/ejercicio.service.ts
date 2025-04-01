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

  private tablas: { [key: string]: Ejercicio } = {
    'Basica': {
      titulo: 'Tabla Básica con Angular',
      unidad: 'Unidad 1: Fundamentos de Angular',
      descripcion: 'Implementación de una tabla básica usando Angular Material o DataTables. Incluye características como: paginación, filtrado y ordenamiento. Ejemplo práctico con datos locales usando *ngFor.',
      objetivo: 'Dominar la creación de tablas estáticas en Angular, entender el binding de datos y el uso de directivas estructurales.',
    },
    'Anime': {
      titulo: 'Tabla de Anime con API',
      unidad: 'Unidad 2: Consumo de APIs',
      descripcion: 'Tabla que consume datos de una API pública de anime (como Jikan API). Muestra cómo manejar suscripciones HTTP, loading states y errores. Incluye detalles como episodios, rating y estudios de animación.',
      objetivo: 'Aprender a consumir APIs REST en Angular usando HttpClient y mostrar datos complejos en tablas.',
    },
    'JSON': {
      titulo: 'Tabla con Datos JSON',
      unidad: 'Unidad 2: Manejo de Datos',
      descripcion: 'Tabla que lee datos estructurados desde un archivo JSON local (assets/data.json). Demuestra cómo usar interfaces TypeScript para tipado seguro y transformación de datos antes de mostrarlos.',
      objetivo: 'Practicar el manejo de archivos JSON y el tipado estático en Angular para prevenir errores.',
    },
    'AJAX': {
      titulo: 'Tabla con Carga Asíncrona',
      unidad: 'Unidad 3: Programación Reactiva',
      descripcion: 'Implementación avanzada que combina DataTables con RxJS para carga dinámica. Incluye: cancelación de requests, debounce para búsquedas y manejo de observables con async pipe.',
      objetivo: 'Entender programación reactiva aplicada a tablas y optimización de rendimiento.',
    }
};

private graficas: { [key: string]: Ejercicio } = {
    'Gráfica': {
      titulo: 'Gráficos Dinámicos con Chart.js',
      unidad: 'Unidad 4: Visualización de Datos',
      descripcion: 'Gráfico interactivo que muestra datos en tiempo real. Características: tooltips personalizados, animaciones y actualización dinámica. Integración con Angular usando ng2-charts.',
      objetivo: 'Aprender a visualizar datos complejos y configurar gráficos responsivos.',
    },
    'Gráfica Estática': {
      titulo: 'Gráficos Estáticos',
      unidad: 'Unidad 4: Visualización Básica',
      descripcion: 'Gráficos no interactivos para dashboards (barras, líneas, pie). Enfoque en diseño responsive y accesibilidad (ARIA labels). Uso de SVG nativo o librerías ligeras.',
      objetivo: 'Crear visualizaciones para impresión o reportes estáticos.',
    },
    'Gráfica JSON': {
      titulo: 'Gráficos con Datos Externos',
      unidad: 'Unidad 4: APIs y Gráficos',
      descripcion: 'Gráfico que se alimenta de un endpoint API REST/JSON. Manejando formatos como: {labels: [], datasets: []}. Incluye validación de datos con Zod o class-validator.',
      objetivo: 'Dominar la transformación de datos API a formatos compatibles con librerías de gráficos.',
    },
    'Gráfica Ajax': {
      titulo: 'Gráficos con Carga Asíncrona',
      unidad: 'Unidad 5: Optimización',
      descripcion: 'Implementación avanzada con Web Workers para procesamiento fuera del hilo principal. Features: lazy loading de librerías, virtual scrolling para grandes datasets.',
      objetivo: 'Optimizar gráficos para datasets masivos sin bloquear el UI.',
    }
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

  getTablaInfo(tabla: string): Ejercicio {
    return this.tablas[tabla] || {
      titulo: 'Selecciona una tabla',
      unidad: '',
      descripcion: '',
      objetivo: '',
    };
  }

  getGraficaInfo(grafica: string): Ejercicio {
    if (!grafica || !(grafica in this.graficas)) {
      console.error("Gráfica no encontrada:", grafica);
      return {
        titulo: 'Selecciona una gráfica',
        unidad: '',
        descripcion: '',
        objetivo: ''
      };
    }
    return this.graficas[grafica];
  }
  
}