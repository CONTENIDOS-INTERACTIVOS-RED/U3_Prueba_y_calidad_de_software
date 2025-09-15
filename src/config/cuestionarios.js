export default {
  tema3: {
    tema: '3. Aplicación de normas ISO 9001 e ISO/IEC 25010',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre pruebas de software y control de calidad.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál de los siguientes tipos de prueba se enfoca en validar métodos individuales de una clase?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Prueba de sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Prueba de integración',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Prueba unitaria',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Prueba funcional',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas unitarias se enfocan en validar métodos individuales de una clase.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas unitarias se enfocan en validar métodos individuales de una clase.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta se utiliza comúnmente para realizar pruebas unitarias en proyectos Java?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Selenium',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Postman',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'JUnit',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Jenkins',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JUnit es la herramienta más común para pruebas unitarias en Java.',
        mensaje_incorrecto:
          'Incorrecto. JUnit es la herramienta más común para pruebas unitarias en Java.',
      },
      {
        id: 3,
        texto:
          'En las pruebas de integración, ¿qué se busca validar principalmente?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto:
              'La interacción correcta entre varios componentes del sistema',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'El rendimiento del servidor bajo alta carga',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'La cobertura total del código fuente',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'La experiencia del usuario en el frontend',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas de integración validan la interacción entre componentes del sistema.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas de integración validan la interacción entre componentes del sistema.',
      },
      {
        id: 4,
        texto: '¿Cuál es una característica de la técnica de caja negra?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Se enfoca en la lógica interna del código',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'No requiere conocer el código fuente',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Evalúa decisiones y bucles internos',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Se utiliza solo en pruebas unitarias',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La técnica de caja negra no requiere conocer el código fuente.',
        mensaje_incorrecto:
          'Incorrecto. La técnica de caja negra no requiere conocer el código fuente.',
      },
      {
        id: 5,
        texto:
          '¿Qué componente permite hacer llamadas HTTP simuladas en pruebas con Spring Boot?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Mockito',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'TestRestTemplate',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'JPARepository',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'JaCoCo',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! TestRestTemplate permite hacer llamadas HTTP simuladas en pruebas.',
        mensaje_incorrecto:
          'Incorrecto. TestRestTemplate permite hacer llamadas HTTP simuladas en pruebas.',
      },
    ],
  },
  tema4: {
    tema: '4. Integración de pruebas automatizadas en pipelines CI/CD',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre automatización de pruebas e integración en pipelines CI/CD.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es el principal beneficio de automatizar pruebas de software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Reducir la cantidad de desarrolladores',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Eliminar la necesidad de pruebas manuales',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Mejorar la eficiencia y detectar errores de forma temprana',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Aumentar el tiempo de desarrollo',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La automatización mejora la eficiencia y permite detectar errores tempranamente.',
        mensaje_incorrecto:
          'Incorrecto. La automatización mejora la eficiencia y detecta errores de forma temprana.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta es comúnmente utilizada para pruebas unitarias en aplicaciones Java?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Selenium',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'JUnit',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Postman',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'TestNG',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JUnit es el framework más utilizado para pruebas unitarias en Java.',
        mensaje_incorrecto:
          'Incorrecto. JUnit es la herramienta más común para pruebas unitarias en Java.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de las siguientes herramientas permite la automatización de pruebas en la interfaz gráfica de una aplicación web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Git',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Selenium',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'JUnit',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Maven',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Selenium es la herramienta principal para automatizar pruebas de interfaz web.',
        mensaje_incorrecto:
          'Incorrecto. Selenium es la herramienta para automatizar pruebas de interfaz web.',
      },
      {
        id: 4,
        texto:
          'En un pipeline CI/CD, ¿qué etapa permite validar automáticamente que los cambios en el código no introducen errores?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Ejecución de pruebas automatizadas',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Revisión de código manual',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Publicación de documentación',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Registro del commit',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas automatizadas validan que los cambios no introduzcan errores.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas automatizadas son las que validan automáticamente los cambios.',
      },
      {
        id: 5,
        texto:
          '¿Cuál es la función principal del archivo Jenkinsfile en un proyecto de automatización?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Configurar las reglas de negocio del sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Definir el flujo de trabajo del pipeline CI/CD',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Gestionar los permisos de los usuarios',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Ejecutar manualmente los scripts de prueba',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
        mensaje_incorrecto:
          'Incorrecto. Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
      },
    ],
  },
  tema5: {
    tema: '5. Automatización de pruebas de software',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre automatización de pruebas de software y herramientas CI/CD.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es el principal beneficio de automatizar pruebas de software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Reducir la cantidad de desarrolladores',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Eliminar la necesidad de pruebas manuales',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Mejorar la eficiencia y detectar errores de forma temprana',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto: 'Aumentar el tiempo de desarrollo',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! La automatización mejora la eficiencia y permite detectar errores tempranamente.',
        mensaje_incorrecto:
          'Incorrecto. La automatización mejora la eficiencia y detecta errores de forma temprana.',
      },
      {
        id: 2,
        texto:
          '¿Qué herramienta es comúnmente utilizada para pruebas unitarias en aplicaciones Java?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Selenium',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'JUnit',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Postman',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'TestNG',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! JUnit es el framework más utilizado para pruebas unitarias en Java.',
        mensaje_incorrecto:
          'Incorrecto. JUnit es la herramienta más común para pruebas unitarias en Java.',
      },
      {
        id: 3,
        texto:
          '¿Cuál de las siguientes herramientas permite la automatización de pruebas en la interfaz gráfica de una aplicación web?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Git',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Selenium',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'JUnit',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Maven',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Selenium es la herramienta principal para automatizar pruebas de interfaz web.',
        mensaje_incorrecto:
          'Incorrecto. Selenium es la herramienta para automatizar pruebas de interfaz web.',
      },
      {
        id: 4,
        texto:
          'En un pipeline CI/CD, ¿qué etapa permite validar automáticamente que los cambios en el código no introducen errores?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Ejecución de pruebas automatizadas',
            esCorrecta: true,
          },
          {
            id: 'b',
            texto: 'Revisión de código manual',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Publicación de documentación',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Registro del commit',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Las pruebas automatizadas validan que los cambios no introduzcan errores.',
        mensaje_incorrecto:
          'Incorrecto. Las pruebas automatizadas son las que validan automáticamente los cambios.',
      },
      {
        id: 5,
        texto:
          '¿Cuál es la función principal del archivo Jenkinsfile en un proyecto de automatización?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Configurar las reglas de negocio del sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Definir el flujo de trabajo del pipeline CI/CD',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Gestionar los permisos de los usuarios',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Ejecutar manualmente los scripts de prueba',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
        mensaje_incorrecto:
          'Incorrecto. Jenkinsfile define el flujo de trabajo del pipeline CI/CD.',
      },
    ],
  },
}
