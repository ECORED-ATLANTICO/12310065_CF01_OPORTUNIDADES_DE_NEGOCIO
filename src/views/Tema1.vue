<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercados
    
    .bg-full-width.bg-fondo-1.px-5
      .bloque-texto-g.color-secundario.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 El mercado constituye la base para la toma de decisiones empresariales, siendo el punto de partida para la identificación y evaluación de ideas de negocio. Su análisis permite comprender las dinámicas de interacción entre consumidores y oferentes, así como las condiciones del entorno que influyen en el comportamiento de la oferta y la demanda. En este sentido, el mercado se configura como un sistema dinámico que orienta la formulación de estrategias y la proyección de oportunidades comerciales.
      
      separador
      
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Concepto
      
      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-3.mb-3.mb-lg-0.order-2
          figure
            img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
        .col-lg-9.order-1.mb-3.mb-lg-0
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
            .col-lg-7
              .bg-color-3.px-5.py-4
                p.mb-0 El mercado es el sistema de interacción donde confluyen compradores y vendedores para el intercambio de bienes o servicios, determinado por variables económicas, sociales, tecnológicas y culturales. Desde el enfoque empresarial, el mercado no se limita a un espacio físico o digital, sino que representa un entorno de análisis que permite identificar necesidades, comportamientos de consumo y oportunidades de negocio. 
          .bg-color-4.px-5.py-4
            p.mb-0 Comprender el mercado implica analizar sus actores, condiciones de competencia, niveles de demanda y características del entorno, lo cual permite a las organizaciones diseñar estrategias alineadas con la realidad del contexto
    
    .cajon.color-acento-botones.bg-color-13.p-4
      p.mb-0 La cadena Tiendas D1 ha desarrollado su modelo de negocio a partir del análisis del comportamiento del consumidor colombiano, enfocándose en precios bajos, eficiencia operativa y productos de alta rotación, lo que le ha permitido posicionarse en el mercado de consumo masivo.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Clasificación
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") La clasificación de los mercados permite segmentar su estructura y comprender sus características, facilitando la identificación de oportunidades y la definición de estrategias comerciales diferenciadas según el tipo de cliente, producto y alcance geográfico. Clasificación de los mercados según su naturaleza y alcance
  
    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/5.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Mercado de consumo
              p Conformado por personas o familias que adquieren productos o servicios para satisfacer necesidades personales, familiares o de uso cotidiano. La compra se realiza para el consumo final y no para revender o transformar el producto.
              p.mb-0 <b>Ejemplo empresarial</b>: D1, Éxito.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/6.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Mercado industrial
              p Está integrado por empresas u organizaciones que compran bienes, materias primas, maquinaria o insumos para producir otros bienes o prestar servicios. Las compras suelen ser más planificadas y en mayores cantidades.
              p.mb-0 <b>Ejemplo empresarial</b>: Argos (insumos de construcción).
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/7.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Mercado de servicios
              p Está compuesto por organizaciones o personas que ofrecen actividades, conocimientos o experiencias destinadas a satisfacer necesidades sin entregar un producto físico. Lo que se comercializa, es un servicio.
              p.mb-0 <b>Ejemplo empresarial</b>: Bancolombia, EPS.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/8.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Mercado local
              p Es aquel que desarrolla sus actividades comerciales dentro de una zona geográfica limitada, como un barrio, una comuna, un municipio o una ciudad. Sus clientes suelen encontrarse cerca del punto de venta.
              p.mb-0 <b>Ejemplo empresarial</b>: tiendas de barrio.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema1/9.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Mercado global
              p Es el mercado en el que empresas o emprendedores ofrecen productos o servicios a clientes ubicados en diferentes países o regiones del mundo, aprovechando el comercio internacional y las tecnologías digitales.
              p.mb-0 <b>Ejemplo empresarial</b> Amazon, Alibaba.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") Amazon opera en un mercado global, adaptando su logística, precios y oferta según las condiciones de cada país, evidenciando la importancia de comprender el tipo de mercado para competir estratégicamente.
        .cajon.color-acento-contenido.bg-color-1.p-4
          p.mb-0 Las tiendas de barrio representan un mercado local, caracterizado por su cercanía con el consumidor y su conocimiento directo de las necesidades de la comunidad. Su operación se limita a un área geográfica específica, lo que les permite ofrecer atención personalizada y adaptarse rápidamente a la demanda del entorno.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Beneficios
    
    img(src="@/assets/curso/tema1/11.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text El análisis de mercados proporciona información relevante que reduce la incertidumbre en la toma de decisiones empresariales, permitiendo anticipar cambios del entorno y responder de manera estratégica a las necesidades del consumidor.
    
    .row.justify-content-center
      .col-xl-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Beneficios del análisis de mercados en el entorno empresarial
        .tabla-a.color-acento-contenido.mb-5.tbl
          table
            caption Nota. Adaptada de Malhotra, (2008).
            thead.bg-color-11
              tr.bg-color-10
                th Beneficio
                th Descripción
                th Aplicación empresarial
            tbody
              tr.bg-color-white
                td.text-bold Identificación de oportunidades
                td Detecta necesidades no satisfechas
                td Desarrollo de nuevos productos
              tr.bg-color-sintesis
                td.text-bold Reducción de riesgos
                td Minimiza incertidumbre
                td Decisiones más acertadas
              tr.bg-color-white
                td.text-bold Conocimiento del cliente
                td Analiza preferencias
                td Segmentación efectiva
              tr.bg-color-sintesis
                td.text-bold Planeación estratégica
                td Apoya decisiones empresariales
                td Ventaja competitiva
    
    p La empresa Alpina analiza tendencias de consumo saludable para desarrollar productos como yogures funcionales, respondiendo a nuevas demandas del mercado.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-5.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.col-lg-2.position-relative
              img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema1/12.png")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 ¿Qué es MERCADO? Seis claves para identificar oportunidades en un mercado.
                  p.mb-0 Para fortalecer la comprensión del tema, se invita a ir al siguiente recurso audiovisual, donde se explica de manera aplicada el funcionamiento del mercado. Este material facilita la interpretación de los conceptos en contextos empresariales 
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=iEnwxNJL_uo " target="_blank")
                    span Ir al video
                    i.fa-brands.fa-youtube


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
