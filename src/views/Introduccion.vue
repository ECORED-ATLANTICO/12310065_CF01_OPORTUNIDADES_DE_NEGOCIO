<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") El componente formativo <b>Análisis y evaluación de negocio</b> aborda el estudio del mercado y del entorno como elementos fundamentales para la generación y validación de ideas de negocio. En este contexto, el análisis del mercado permite comprender el comportamiento de los consumidores, las características de la oferta y la demanda, así como las condiciones del entorno económico, social y competitivo que influyen en el desarrollo de oportunidades comerciales.
        p A través del desarrollo de este componente se analizan conceptos relacionados con los mercados, la segmentación, el entorno y la dinámica del mercado, los cuales permiten identificar necesidades, tendencias y oportunidades en contextos reales. Asimismo, se abordan herramientas de análisis estratégico como la matriz DOFA, que facilitan la evaluación de factores internos y externos que inciden en la viabilidad de una idea de negocio.
    
    .cajon.color-acento-contenido.bg-color-1.p-4
      p.mb-0 De igual manera, el componente integra el uso de fuentes de información, técnicas de recolección de datos y herramientas tecnológicas para el procesamiento de la información, permitiendo fortalecer la toma de decisiones en el ámbito empresarial. A lo largo del desarrollo temático se abordarán conceptos, herramientas y aplicaciones prácticas que contribuirán al análisis y evaluación de ideas de negocio con criterios de viabilidad comercial, técnica y operativa.
    
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
