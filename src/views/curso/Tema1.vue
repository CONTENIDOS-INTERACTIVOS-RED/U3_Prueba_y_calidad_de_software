<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Control de calidad en el desarrollo de software'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            p(data-aos="fade-left").mb-4 Para conocer sobre la temática, lo invitamos a escuchar el siguiente pódcast.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Control de calidad en el desarrollo de software"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
          .col-lg-6
            figure
              img(src="@/assets/curso/tema1/1.svg", data-aos="zoom-in")
    

    // Bloque 2/4: titulo-segundo
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Auditorías de calidad del software

    // Bloque 3/4: texto
    .row.justify-content-center.mb-5
      .col-12
        p La auditoría de calidad en el desarrollo de software constituye una herramienta estratégica para asegurar el cumplimiento de estándares y fortalecer los procesos organizacionales.

    // Bloque 4/4: img-anexo
    .bg-full-width.bg-color-5.mb-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/2.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") #[strong Auditorías de calidad del software]
            p.mb-4(data-aos="fade-right") En el PDF Auditorías de calidad del software, se presenta un recorrido detallado por los tipos de auditoría, sus etapas, normas aplicables y beneficios prácticos, con el fin de proporcionar una guía integral para su aplicación en contextos reales. Este contenido permite a los equipos de desarrollo y QA identificar oportunidades de mejora, garantizar la trazabilidad y avanzar hacia una cultura de calidad sostenible.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Auditorías de calidad del software

    // Bloque 5/4: bloque-material-complementario
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
              a(href="https://youtu.be/AGAoWPnqc8o?si=qS81JAXvZxA7lL1t" target="_blank" rel="noopener noreferrer") Gonzalez J. (2021, 22 de mayo) Estructura de ciclo de vida del software. [video] YouTube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
