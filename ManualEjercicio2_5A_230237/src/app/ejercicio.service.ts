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
      titulo: 'Componentes Angular: Fundamentos',
      unidad: 'Unidad 2: Arquitectura de Componentes',
      descripcion: `Creación de componentes mediante CLI (ng generate component). 
      - Estructura básica: @Component decorator, template HTML y estilos CSS
      - Data binding: Interpolación {{ }}, property binding [ ] y event binding ( )
      - Ejemplo práctico: Componente "user-card" que muestra datos de perfil`,
      objetivo: `1. Comprender la estructura de componentes Angular
      2. Implementar comunicación básica template-clase
      3. Generar componentes mediante Angular CLI`
    },
    'Ejercicio 2': {
      titulo: 'Gestión de Estado en Componentes',
      unidad: 'Unidad 2: Estado y Comportamiento',
      descripcion: `Técnicas avanzadas de manejo de estado:
      - Propiedades públicas vs privadas
      - Métodos del ciclo de vida (ngOnInit, ngOnChanges)
      - Uso de setters/getters para propiedades
      Caso práctico: Componente contador con historial de cambios`,
      objetivo: `1. Controlar el estado interno del componente
      2. Implementar lógica reactiva
      3. Optimizar rendimiento con OnPush change detection`
    },
    'Ejercicio 3': {
      titulo: 'Composición de Componentes',
      unidad: 'Unidad 2: Diseño Modular',
      descripcion: `Patrones de composición:
      - Componentes contenedores vs presentacionales
      - Comunicación mediante @Input/@Output
      - Content projection con ng-content
      Ejemplo: Dashboard con componentes reutilizables`,
      objetivo: `1. Diseñar arquitecturas componentizadas
      2. Implementar comunicación padre-hijo
      3. Crear componentes independientes y reutilizables`
    },
    'Ejercicio 4': {
      titulo: 'Control de Flujo: *ngIf',
      unidad: 'Unidad 2: Renderizado Condicional',
      descripcion: `Directiva estructural *ngIf:
      - Sintaxis básica y avanzada
      - Mejores prácticas de rendimiento
      - Alternativas: [hidden] vs *ngIf
      Caso de uso: Sistema de permisos de usuario`,
      objetivo: `1. Dominar renderizado condicional
      2. Evitar problemas comunes de performance
      3. Implementar lógica de plantillas complejas`
    },
    'Ejercicio 5': {
      titulo: 'Control de Flujo: *ngFor',
      unidad: 'Unidad 2: Listas Dinámicas',
      descripcion: `Renderizado de colecciones:
      - Sintaxis básica de *ngFor
      - trackBy para optimización
      - Manipulación de arrays (filter, map)
      Ejemplo: Lista paginada con búsqueda en tiempo real`,
      objetivo: `1. Implementar listas eficientes
      2. Manejar grandes conjuntos de datos
      3. Dominar técnicas de optimización`
    },
    'Ejercicio 6': {
      titulo: 'Property Binding Avanzado',
      unidad: 'Unidad 2: Data Binding',
      descripcion: `Técnicas avanzadas:
      - Binding a propiedades personalizadas
      - Uso de setters para validación
      - Interceptores de propiedades
      Caso práctico: Componente de rating con estrellas`,
      objetivo: `1. Dominar flujo unidireccional de datos
      2. Implementar validación reactiva
      3. Crear componentes con API intuitiva`
    },
    'Ejercicio 7': {
      titulo: 'Manejo de Eventos',
      unidad: 'Unidad 2: Interacción',
      descripcion: `Patrones avanzados:
      - Event bubbling y propagación
      - Custom events con EventEmitter
      - Debounce y throttling nativo
      Ejemplo: Búsqueda con autocompletado`,
      objetivo: `1. Gestionar eventos complejos
      2. Optimizar interacciones frecuentes
      3. Implementar comunicación entre componentes`
    },
    'Ejercicio 8': {
      titulo: 'Comunicación con @Input',
      unidad: 'Unidad 2: Component Interaction',
      descripcion: `Flujo de datos descendente:
      - Tipado estricto con interfaces
      - Transformación de datos on-the-fly
      - Control de cambios con ngOnChanges
      Ejemplo: Componente de perfil configurable`,
      objetivo: `1. Dominar paso de datos padre→hijo
      2. Implementar componentes configurables
      3. Gestionar reactividad de inputs`
    },
    'Ejercicio 9': {
      titulo: 'Comunicación con @Output',
      unidad: 'Unidad 2: Eventos Personalizados',
      descripcion: `Patrones de emisión:
      - Custom payloads con tipos específicos
      - Patrón Observer con EventEmitter
      - Buenas prácticas de diseño de APIs
      Caso: Formulario con validación en cascada`,
      objetivo: `1. Implementar comunicación hijo→padre
      2. Diseñar contratos de eventos claros
      3. Gestionar flujos complejos de datos`
    },
    'Ejercicio 10': {
      titulo: 'Vistas Diferidas (Defer)',
      unidad: 'Unidad 2: Optimización',
      descripcion: `Técnicas de lazy loading:
      - @defer con triggers (viewport, interaction)
      - Manejo de estados (loading, error)
      - Prefetching estratégico
      Ejemplo: Dashboard con módulos bajo demanda`,
      objetivo: `1. Reducir bundle size inicial
      2. Mejorar métricas Core Web Vitals
      3. Implementar carga progresiva`
    },
    'Ejercicio 11': {
      titulo: 'Optimización de Imágenes',
      unidad: 'Unidad 2: Performance',
      descripcion: `Técnicas avanzadas:
      - Uso de directiva NgOptimizedImage
      - Formatos modernos (WebP/AVIF)
      - Lazy loading nativo
      - CDN y transformaciones on-demand`,
      objetivo: `1. Reducir LCP (Largest Contentful Paint)
      2. Implementar responsive images
      3. Optimizar uso de ancho de banda`
    },
    'Ejercicio 12': {
      titulo: 'Routing Avanzado',
      unidad: 'Unidad 2: Navegación',
      descripcion: `Configuración profesional:
      - Lazy loading de rutas
      - Guards (auth, roles, preloading)
      - Route resolvers para data fetching
      - Scroll restoration y state management`,
      objetivo: `1. Implementar navegación compleja
      2. Gestionar autenticación/autorización
      3. Optimizar experiencia de usuario`
    }
  };

  private tablas: { [key: string]: Ejercicio } = {
    'Basica': {
      titulo: 'Tablas con Angular Material',
      unidad: 'Unidad 3: Data Display',
      descripcion: `Implementación profesional:
      - MatTable con DataSource personalizado
      - Paginación client/server-side
      - Ordenamiento multi-columna
      - Filtrado integrado con RxJS
      - Exportación a CSV/Excel`,
      objetivo: `1. Dominar MatTableDataSource
      2. Implementar features empresariales
      3. Manejar datasets de gran volumen`
    },
    'Anime': {
      titulo: 'Consumo de APIs REST',
      unidad: 'Unidad 4: Integración',
      descripcion: `Flujo completo con Jikan API:
      1. Servicio con HttpClient
      2. Manejo de errores y retries
      3. Transformación de datos con RxJS
      4. Paginación server-side
      5. Cache estratégico con interceptors`,
      objetivo: `1. Consumir APIs REST eficientemente
      2. Implementar patrones resilientes
      3. Manejar estados de carga complejos`
    },
    'JSON': {
      titulo: 'Manejo de Datos Locales',
      unidad: 'Unidad 3: Data Management',
      descripcion: `Workflow completo:
      1. Tipado fuerte con interfaces
      2. Carga desde assets/*.json
      3. Transformación con operadores RxJS
      4. Validación con Zod
      5. Mocking para desarrollo`,
      objetivo: `1. Implementar type safety
      2. Dominar transformación de datos
      3. Crear arquitecturas testables`
    },
    'AJAX': {
      titulo: 'Programación Reactiva',
      unidad: 'Unidad 4: RxJS Avanzado',
      descripcion: `Patrones avanzados:
      - Cancelación de requests
      - Debounce para búsquedas
      - Manejo de race conditions
      - Optimización de subscripciones
      - WebSockets en tiempo real`,
      objetivo: `1. Dominar observables complejos
      2. Implementar cancelación de operaciones
      3. Optimizar performance en apps real-time`
    }
  };

  private graficas: { [key: string]: Ejercicio } = {
    'Gráfica': {
      titulo: 'Visualización con Chart.js',
      unidad: 'Unidad 5: Dashboarding',
      descripcion: `Configuración profesional:
      - Integración con ng2-charts
      - Tipos: line, bar, radar, bubble
      - Animaciones personalizadas
      - Actualización en tiempo real
      - Plugins: zoom, annotations`,
      objetivo: `1. Dominar visualización de datos
      2. Implementar dashboards interactivos
      3. Optimizar rendimiento gráfico`
    },
    'Gráfica Estática': {
      titulo: 'Reportes Exportables',
      unidad: 'Unidad 5: Business Intelligence',
      descripcion: `Generación de reportes:
      - Highcharts para gráficos estáticos
      - Exportación a PDF/PNG
      - Configuración para impresión
      - Acessibilidad (ARIA labels)
      - Internacionalización`,
      objetivo: `1. Crear visualizaciones para impresión
      2. Implementar exportación profesional
      3. Garantizar accesibilidad`
    },
    'Gráfica JSON': {
      titulo: 'Data Visualization Pipeline',
      unidad: 'Unidad 5: ETL',
      descripcion: `Flujo completo de datos:
      1. Consumo de API REST
      2. Transformación a formato chart.js
      3. Validación con JSON Schema
      4. Caching estratégico
      5. Manejo de errores`,
      objetivo: `1. Dominar ETL frontend
      2. Implementar pipelines resilientes
      3. Garantizar consistencia de datos`
    },
    'Gráfica Ajax': {
      titulo: 'Real-time Analytics',
      unidad: 'Unidad 5: Streaming',
      descripcion: `Técnicas avanzadas:
      - WebSockets con RxJS
      - Web Workers para procesamiento
      - Virtual scrolling para big data
      - Sampling estratégico
      - Cross-tab synchronization`,
      objetivo: `1. Implementar dashboards real-time
      2. Manejar grandes volúmenes de datos
      3. Optimizar uso de recursos`
    }
  };


  constructor() { }

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