<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/5: iconobloque-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el desarrollo profesional de soluciones de software, el concepto de calidad trasciende el cumplimiento técnico para convertirse en un factor determinante de éxito organizacional. La presente unidad, titulada Control de calidad, se enfoca en brindar las herramientas conceptuales y operativas necesarias para gestionar, evaluar y optimizar la calidad del software de manera estructurada y medible. Su abordaje resulta fundamental para comprender cómo las prácticas de pruebas y los estándares de calidad, permiten entregar productos confiables, eficientes y alineados con los requerimientos del usuario.

        p(data-aos="fade-left") A lo largo de esta unidad, se espera que el estudiante logre identificar los principales mecanismos de control de calidad aplicables en el contexto del desarrollo de software. Entre los objetivos de aprendizaje se encuentran:

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")

    // Bloque 2/5: tarjetas-boton 4:4:4
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" style="width: 90px")
          h5.mb-2.text-center Objetivo 1
          p.mb-0.text-center Reconocer la función de las auditorías como instrumentos de evaluación objetiva
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" style="width: 90px")
          h5.mb-2.text-center Objetivo 2
          p.mb-0.text-center Aplicar indicadores de desempeño para medir la eficacia de procesos y productos
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" style="width: 90px")
          h5.mb-2.text-center Objetivo 3
          p.mb-0.text-center Comprender el marco normativo de la norma ISO 9001, orientado a la gestión sistemática de la calidad.

    // Bloque 3/5: texto
    .row.justify-content-center
      .col-12
        p La relevancia de esta unidad radica en su aplicabilidad directa en entornos reales de trabajo. En la actualidad, organizaciones públicas y privadas requieren profesionales capaces de integrar procesos de calidad que aseguren la entrega de software robusto, seguro y sostenible. La incorporación de estos conocimientos fortalece la capacidad para participar en auditorías, diseñar métricas estratégicas y alinear el desarrollo técnico con marcos de gestión reconocidos internacionalmente.
        p La unidad está organizada en tres temas.

    // Bloque 4/5: imagen-color
    .row.mb-5
      .col-lg-8
        .bg-color-16.p-4(data-aos="fade-left").mb-4
          p.mb-3 #[strong Tema 1] Se enfoca en las auditorías de calidad, abordando sus tipos, etapas y ejemplos aplicados en ciclos de vida del software.
          p.mb-3 #[strong Tema 2] Analiza los indicadores de desempeño, su clasificación, aplicación práctica y uso para la toma de decisiones basada en datos.
          p.mb-0 #[strong Tema 3] Desarrolla la implementación de normas ISO 9001, con especial énfasis en su adaptación al contexto del aseguramiento de calidad en entornos ágiles y de integración continua.

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/4.png", data-aos="zoom-in")

    // Bloque 5/5: bg-full-icono-texto
    .bg-full-width.bg-color-2
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Se espera que el estudiante participe activamente en las actividades propuestas, realice análisis reflexivos, y aplique los conceptos adquiridos en estudios de caso y ejercicios prácticos. Para aprovechar al máximo esta unidad, se recomienda revisar los contenidos previos sobre técnicas de prueba y fundamentos de calidad abordados en las unidades anteriores.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
