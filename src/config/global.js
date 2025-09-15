export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Control de calidad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Control de calidad en el desarrollo de software',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Indicadores claves de desempeño (KPIs) en pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aplicación de normas ISO 9001 e ISO/IEC 25010',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Omaña, M. (2012). Manufactura esbelta: una contribución para el desarrollo de software con calidad: ( ed.). Red Enlace.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/98547',
    },
    {
      referencia:
        'Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511',
    },
    {
      referencia:
        'Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría de calidad',
      significado:
        'Proceso de revisión sistemática para evaluar la conformidad con estándares.',
    },
    {
      termino: 'Automatización de pruebas',
      significado:
        'Uso de herramientas para ejecutar casos de prueba automáticamente.',
    },
    {
      termino: 'Bug',
      significado:
        'Término comúnmente utilizado para referirse a un error o defecto en el software.',
    },
    {
      termino: 'Caja blanca',
      significado:
        'Técnica de prueba basada en el conocimiento del código fuente.',
    },
    {
      termino: 'Caja negra',
      significado:
        'Técnica de prueba basada en la funcionalidad sin conocer el código interno.',
    },
    {
      termino: 'Calidad',
      significado:
        'Grado en el que un producto cumple con los requisitos especificados y expectativas del usuario.',
    },
    {
      termino: 'Caso de prueba',
      significado:
        'Conjunto de condiciones y pasos utilizados para verificar una funcionalidad específica.',
    },
    {
      termino: 'Cobertura de pruebas',
      significado:
        'Porcentaje del código que ha sido ejecutado mediante pruebas.',
    },
    {
      termino: 'Defecto',
      significado:
        'Error o fallo en el software que causa un comportamiento inesperado.',
    },
    {
      termino: 'Indicador de desempeño',
      significado:
        'Métrica utilizada para evaluar la eficiencia o efectividad de un proceso.',
    },
    {
      termino: 'ISO 9001',
      significado:
        'Norma internacional para sistemas de gestión de la calidad.',
    },
    {
      termino: 'KPI',
      significado:
        'Indicador clave de rendimiento utilizado para medir objetivos estratégicos.',
    },
    {
      termino: 'Mejora continua',
      significado: 'Ciclo de optimización constante de procesos y productos.',
    },
    {
      termino: 'MTTR',
      significado: 'Tiempo medio de resolución de defectos.',
    },
    {
      termino: 'Prueba de integración',
      significado:
        'Evaluación de la interacción entre múltiples módulos de software.',
    },
    {
      termino: 'Prueba de regresión',
      significado:
        'Verificación de que un cambio no haya afectado funcionalidades ya existentes.',
    },
    {
      termino: 'Prueba de sistema',
      significado:
        'Prueba que evalúa un sistema completo como una entidad integrada.',
    },
    {
      termino: 'Prueba de software',
      significado:
        'Proceso sistemático para evaluar la funcionalidad y calidad de una aplicación.',
    },
    {
      termino: 'Prueba unitaria',
      significado:
        'Validación de la funcionalidad de una unidad o módulo individual de código.',
    },
    {
      termino: 'SCRUM',
      significado:
        'Marco de trabajo ágil utilizado para el desarrollo iterativo de software.',
    },
  ],
}
