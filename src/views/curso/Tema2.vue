<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Indicadores claves de desempeño (KPIs) en pruebas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/21: texto-iconobloque-imagen 8:4
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 El desarrollo de software contemporáneo se ve atravesado por transformaciones profundas derivadas del avance tecnológico, la agilidad de mercado y la hipercompetencia digital. En este contexto, la calidad no puede ser considerada una cualidad espontánea del producto software, sino el resultado planificado de un sistema complejo de decisiones, prácticas, normas, estrategias y validaciones continuas. Entre esas estrategias, la medición sistemática mediante indicadores de desempeño cumple una función vital.

        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 "Lo que no se mide, no se puede controlar. Lo que no se controla, no se puede mejorar". Peter Drucker

        p(data-aos="fade-left") Aplicada al campo de la ingeniería de software, esta afirmación toma un valor práctico incuestionable. No es posible hablar de mejora continua, eficiencia o madurez organizacional si no se dispone de mecanismos cuantitativos para evaluar el comportamiento de los procesos y la calidad de los productos.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")

    // Bloque 2/21: imagen-texto-color
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 Por tanto, el uso de indicadores de desempeño no solo representa una herramienta técnica, sino una decisión estratégica que permite:

        .bg-color-1.p-4.py-lg-5(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-3
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Validar el cumplimiento de requisitos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Comparar el estado actual con los estándares esperados.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Promover una cultura de transparencia y mejora.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Identificar puntos débiles y fortalezas del proceso.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Justificar decisiones de automatización, inversión o rediseño.
          
          p.mb-0 #[strong Desde una perspectiva académica y profesional, un indicador de desempeño puede definirse como una medida observable, cuantificable y verificable que describe una condición, comportamiento o tendencia, de un aspecto del proceso o producto software.]

    // Bloque 3/21: BLOQUE (título)
    h2.mb-4 Definición técnica (ISO 9001)

    // Bloque 4/21: párrafo con color
    .row.mb-5
      .col-12
        .bg-color-4.p-4.mb-4
          p.mb-0 Según la norma ISO 9001:2015, los indicadores de desempeño son medios que permiten "Determinar la eficacia y eficiencia de los procesos frente a los objetivos planificados de calidad".

        p.mb-3 En el caso específico del software, esto significa evaluar si los procesos de desarrollo, validación, prueba y mantenimiento están alcanzando los niveles esperados de eficiencia, confiabilidad, mantenibilidad, seguridad y satisfacción del usuario.

        p.mb-3 #[strong Aportes desde la ingeniería del software]
        p Pressman y Maxim (2015), clasifican las métricas del software en tres grandes familias:

    // Bloque 5/21: infografia
    .bg-full-width.bg-color-info.mb-0
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/infografia1.svg', alt='', style="max-width: 650px;").mx-auto
              .tarjeta.color-primario.p-3(x="40.7%" y="42%" numero="+")
                h5.mb-2 Métricas de producto
                p.mb-0 Se enfocan en la calidad del software resultante.
              .tarjeta.color-primario.p-3(x="47.5%" y="64.9%" numero="+")
                h5.mb-2 Métricas de proceso
                p.mb-0 Evalúan la eficiencia y efectividad de las actividades realizadas.
              .tarjeta.color-primario.p-3(x="61.7%" y="61%" numero="+")
                h5.mb-2 Métricas de proyecto
                p.mb-0 Miden aspectos como productividad, esfuerzo y planificación.

    // Bloque 6/21: bg-full-icono-texto
    .bg-full-width.bg-color-16.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Estas métricas, cuando son seleccionadas, definidas y monitoreadas adecuadamente, se convierten en indicadores de desempeño críticos para la toma de decisiones.

    // Bloque 7/21: BLOQUE (título)
    .row.justify-content-center.mb-4
      .col-12
        h2 Características de un buen indicador
        p Para que un indicador sea funcional en contextos reales, debe cumplir con los siguientes atributos:

    // Bloque 8/21: tabla
    .titulo-figura.mb-2
      h5 Tabla 1. 
      span Atributos

    .tabla-a.color-acento-contenido.mb-5
      table
        caption Tabla de atributos de un buen indicador
        thead
          tr
            th.bg-color-tabla.text-white Característica
            th.bg-color-tabla.text-white Descripción
            th.bg-color-tabla.text-white Ejemplo aplicado en software
        tbody
          tr
            td #[strong Relevante.]
            td Mide un aspecto clave del objetivo del proyecto.
            td Medir cobertura de pruebas, para asegurar calidad del testing.
          tr
            td #[strong Objetivo.]
            td Se basa en datos verificables, no en percepciones.
            td Número de fallos detectados por etapa.
          tr
            td #[strong Cuantificable.]
            td Puede expresarse en valores numéricos o proporciones.
            td 85 % de cobertura de código.
          tr
            td #[strong Comparativo.]
            td Permite identificar tendencias o establecer líneas base.
            td Comparar tasa de errores, mes a mes.
          tr
            td #[strong Oportuno.]
            td Se recolecta con periodicidad adecuada para intervenir procesos.
            td Reporte semanal de defectos por sprint.
          tr
            td #[strong Comprensible.]
            td Puede ser interpretado por todo el equipo.
            td Tiempo promedio de resolución de bugs.
          tr
            td #[strong Accionable.]
            td Facilita la toma de decisiones concretas.
            td Reasignación de tareas, si el rendimiento cae.

    // Bloque 9/21: bg-full-icono-texto
    .bg-full-width.bg-color-16.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Un mal indicador, en cambio, genera confusión, toma de decisiones erróneas y consumo innecesario de recursos.

    // Bloque 10/21: titulo-segundo
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Modelos de calidad asociados a indicadores

    // Bloque 11/21: texto
    .row.justify-content-center.mb-4
      .col-12
        p.mb-5 Los indicadores no existen de manera aislada. Se relacionan profundamente con modelos de calidad reconocidos que sirven como referentes conceptuales para establecer qué se debe medir, por qué y cómo.
        h3 Modelo ISO/IEC 25010: calidad del producto software
        p Este modelo propone una estructura de evaluación compuesta por 8 características principales y sus subcaracterísticas:

    // Bloque 12/21: tabla
    .titulo-figura.mb-2
      h5 Tabla 2. 
      span Características y subcaracterísticas

    .tabla-a.color-acento-contenido.mb-5
      table
        caption Tabla de características ISO/IEC 25010
        thead
          tr
            th.bg-color-tabla.text-white Característica principal
            th.bg-color-tabla.text-white Sub-características
            th.bg-color-tabla.text-white Indicador posible
        tbody
          tr
            td #[strong Funcionalidad.]
            td Adecuación funcional, interoperabilidad, seguridad.
            td Tasa de cumplimiento de casos de uso.
          tr
            td #[strong Fiabilidad.]
            td Madurez, tolerancia a fallos, disponibilidad.
            td Porcentaje de tiempo sin fallas.
          tr
            td #[strong Usabilidad.]
            td Aprendizaje, operabilidad, accesibilidad.
            td Puntuación de pruebas de experiencia UX.
          tr
            td #[strong Rendimiento.]
            td Tiempo de respuesta, utilización de recursos.
            td Tiempo medio de carga de una operación.
          tr
            td #[strong Mantenibilidad.]
            td Análisis, modificación, prueba, reusabilidad.
            td Tiempo de corrección de errores (MTTR).
          tr
            td #[strong Portabilidad.]
            td Adaptabilidad, instalación.
            td Tasa de éxito en despliegue multiplataforma.
          tr
            td #[strong Seguridad.]
            td Confidencialidad, autenticidad, trazabilidad.
            td Número de vulnerabilidades reportadas.
          tr
            td #[strong Compatibilidad.]
            td Coexistencia e interoperabilidad.
            td Número de conflictos entre versiones.

    // Bloque 13/21: bg-full-icono-texto
    .bg-full-width.bg-color-16.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Cada una de estas características] puede ser convertida en indicadores si se modela adecuadamente.

    // Bloque 14/21: titulo-segundo
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Clasificación ampliada de los indicadores de desempeño

    // Bloque 15/21: texto
    .row.justify-content-center.mb-5
      .col-12
        p La correcta clasificación de los indicadores de desempeño es fundamental para establecer sistemas de medición eficaces que impulsen la calidad en el desarrollo de software.

    // Bloque 16/21: anexo-img
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") #[strong Clasificación ampliada de los indicadores de desempeño]
            p.mb-4(data-aos="fade-right") En el PDF Clasificación ampliada de los indicadores de desempeño, se presenta una tipología detallada que permite segmentar los indicadores según su enfoque, nivel organizacional, naturaleza de los datos y finalidad operativa. Este enfoque integral facilita la toma de decisiones informadas, promueve la mejora continua y alinea los procesos técnicos con los objetivos estratégicos de calidad.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Anexo_2.pdf

    // Bloque 17/21: titulo-segundo
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Etapas para el diseño e implementación de un sistema de indicadores

    // Bloque 18/21: texto
    .row.justify-content-center.mb-5
      .col-12
        p El diseño e implementación de un sistema de indicadores de desempeño es una actividad estratégica que permite alinear las acciones de los equipos de desarrollo con los objetivos de calidad organizacional.

    // Bloque 19/21: img-anexo
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") #[strong Etapas para el diseño e implementación de un sistema de indicadores]
            p.mb-4(data-aos="fade-right") En el PDF Etapas para el diseño e implementación de un sistema de indicadores, se describe un proceso estructurado que abarca desde la definición de metas hasta la mejora continua, integrando herramientas, técnicas y criterios de análisis. Este enfoque garantiza que las decisiones técnicas se fundamenten en datos confiables y que los procesos puedan ser evaluados, ajustados y optimizados de manera sistemática.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Anexo_3.pdf

    // Bloque 20/21: BLOQUE (Caso práctico)
    .row.justify-content-center.mb-4
      .col-12
        h2 Caso práctico 1. Automatización de pruebas

        .alert.alert-primary.mb-5.p-4
          p.mb-0 La automatización de pruebas es una práctica crítica para proyectos que trabajan con metodologías ágiles o integración continua (CI/CD). Implementar indicadores que evalúen el nivel de automatización permite garantizar eficiencia, velocidad de retroalimentación y reducción del esfuerzo manual.

        h4 a. Objetivo
        p.mb-5 Monitorear el grado de automatización de pruebas por tipo y su evolución semanal.



        h4 b. Indicadores utilizados

    // Bloque 21/21: tabla
    .titulo-figura.mb-2
      h5 Tabla 3. 
      span Indicadores utilizados

    .tabla-a.color-acento-contenido.mb-5
      table
        caption Tabla de indicadores de automatización
        thead
          tr
            th.bg-color-tabla.text-white Indicador
            th.bg-color-tabla.text-white Descripción
            th.bg-color-tabla.text-white Fórmula
        tbody
          tr
            td #[strong Porcentaje de pruebas automatizadas.]
            td Proporción de pruebas ejecutadas automáticamente.
            td (Número de pruebas automatizadas / Total de pruebas) × 100.
          tr
            td #[strong Tiempo medio de ejecución de suite.]
            td Tiempo promedio para ejecutar toda la suite de pruebas.
            td Suma de tiempos de ejecución / Número de ejecuciones.
          tr
            td #[strong Tasa de fallos detectados automáticamente.]
            td Defectos encontrados por pruebas automáticas.
            td Número de defectos detectados por automatización / Total de defectos.

    // Bloque 22/21: figura-completa
    .titulo-figura.mb-2
      h5 Figura 1. 
      span Grado de automatización por tipo de prueba

    figure.bg-color-info.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in", style="max-width: 655px").mx-auto

    // Bloque 23/21: BLOQUE (Análisis)
    .row.justify-content-center.mb-4
      .col-12
        p.mb-3 Análisis:

        .alert.alert-primary.mb-5.p-4
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Se observa que las pruebas unitarias tienen una automatización del 95%, lo cual es adecuado para garantizar la robustez del código base.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Las pruebas funcionales y E2E presentan menores niveles, lo cual puede deberse a complejidad en la configuración de entornos, lo que justifica una priorización de automatización progresiva.

        h2 Integración de indicadores en marcos ágiles y DevOps
        p La implementación de indicadores puede (y debe) integrarse naturalmente en entornos ágiles:

    // Bloque 24/21: slider-a
    .bg-full-width.bg-fondo-slider.mb-0
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-lg-1
              h3 En Scrum
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong En la daily:] revisar métricas de bugs abiertos por sprint.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong En la retrospectiva:] analizar indicadores de deuda técnica y cobertura.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | #[strong En la planificación:] proyectar capacidad con base en velocidad del sprint.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-lg-1
              h3 En DevOps
              ul.lista-ul--color.color-dark
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Indicadores integrados al pipeline: tiempo de ejecución, tasa de fallos, regresiones.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Dashboards en Jenkins, GitLab CI, CircleCI, Azure DevOps.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Alertas automáticas por desviaciones críticas (cobertura < 70 %).

    // Bloque 25/21: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511" target="_blank" rel="noopener noreferrer") Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/rFsp0jY5uc4?si=8PO7TWAW_JAweTBR" target="_blank" rel="noopener noreferrer") Kaizen Consultores. (2024, 22 de agosto) 163 - REMASTER. Básicos sobre Indicadores y Métricos de Desempeño (KPI) [video] YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
