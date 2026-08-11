<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Dinámica del mercado
    
    .bg-full-width.bg-fondo-1.px-5
      .bloque-texto-g.color-secundario.bg-color-2.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las actividades comerciales se desarrollan en escenarios caracterizados por cambios constantes en las preferencias de los consumidores, las tendencias de compra, la competencia y las condiciones económicas. Esta dinámica del mercado influye directamente en la forma en que las empresas ofrecen sus productos y servicios, obligándolas a adaptarse continuamente para mantener su competitividad. Comprender estos comportamientos y transformaciones permite identificar oportunidades, anticipar desafíos y tomar decisiones más acertadas en un entorno cada vez más dinámico y exigente.

      separador
      
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.1 Concepto
      
      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-3.mb-3.mb-lg-0.order-2
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
        .col-lg-9.order-1.mb-3.mb-lg-0
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
            .col-lg-7
              .bg-color-3.px-5.py-4
                p.mb-0 La dinámica del mercado se refiere al conjunto de cambios, interacciones y comportamientos que ocurren entre los diferentes actores que participan en las actividades comerciales, como consumidores, empresas, proveedores y competidores. Estos cambios están influenciados por factores económicos, sociales, tecnológicos, culturales y empresariales que afectan la oferta, la demanda, los precios y las preferencias de los clientes.  
          .bg-color-4.px-5.py-4
            p.mb-0 Permite comprender cómo evoluciona un sector o actividad económica a lo largo del tiempo, identificando tendencias, oportunidades y desafíos que pueden impactar el desempeño de las organizaciones. 
    
    .cajon.color-acento-botones.bg-color-13.p-4.mb-5
      p.mb-0 Su análisis facilita la adaptación a las condiciones cambiantes del entorno y contribuye a la toma de decisiones estratégicas orientadas al crecimiento y la competitividad.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") Durante la pandemia, plataformas como Rappi y otros domicilios incrementaron su demanda debido a cambios en los hábitos de consumo. El sector turístico evidenció una disminución significativa en la demanda, mostrando la influencia del entorno en la dinámica del mercado.
        .cajon.color-acento-contenido.bg-color-2.p-4
          p.mb-0 Se evidencia una alta demanda en el mercado, como es el sector hotelero; el cual ha incorporado tecnologías como robots para adaptarse a cambios en la demanda y en las condiciones del entorno. Estas transformaciones responden a nuevas necesidades del consumidor, como la bioseguridad y la eficiencia en el servicio. De esta manera, se observa cómo la interacción entre oferta y demanda evoluciona constantemente, obligando a las empresas a innovar para mantenerse competitivas en contextos cambiantes.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2	Oferta y demanda
    
    .bg-full-width.bg-fondo-1.px-5
      img(src="@/assets/curso/tema4/5.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-up")
          p.banner-text Las actividades comerciales se fundamentan en la interacción constante entre quienes ofrecen productos o servicios y quienes los requieren para satisfacer sus necesidades. Esta relación influye en aspectos como la disponibilidad de bienes, las preferencias de los consumidores, los precios y las decisiones de compra. La oferta y la demanda constituyen los elementos fundamentales de la dinámica del mercado, ya que su interacción determina los precios, la disponibilidad de productos y el comportamiento de los consumidores.
      
      .row.justify-content-center.mb-5
        .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema4/6.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Oferta
              p.mb-0 Es la cantidad de bienes o servicios que los productores están dispuestos a vender. Depende de factores como costos de producción, tecnología y competencia.
      
        .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema4/7.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Demanda
              p.mb-0 Es la cantidad de bienes o servicios que los consumidores están dispuestos a adquirir. Está influenciada por ingresos, preferencias, precios y tendencias.
      
        .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
          .crd_hover_txt(data-aos="flip-left").tarjeta
            .crd_hover_txt--img
              figure
                img(src="@/assets/curso/tema4/8.png", alt="alt")
            .crd_hover_txt--body
              h4.mb-3.text-center Relación entre oferta y demanda
              p.mb-0 Si la demanda aumenta y la oferta es limitada: los precios tienden a subir. Si la oferta supera la demanda: los precios tienden a disminuir. El equilibrio de mercado se alcanza cuando oferta y demanda se igualan.
    
      .cajon.color-acento-botones.bg-color-13.p-4.mb-5
        p.mb-0 El aumento en la demanda de productos tecnológicos durante el teletrabajo generó incrementos en precios y escasez temporal. Supermercados como Éxito ajustan su oferta según temporadas (navidad, regreso a clases) para responder a la demanda.
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3	Comportamiento del mercado
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/9.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") El comportamiento del mercado refleja la forma en que consumidores y empresas reaccionan ante cambios en el entorno, precios, tendencias y condiciones económicas. Su análisis permite identificar patrones de consumo y proyectar escenarios futuros. Entre los factores que influyen en el comportamiento del mercado están:
    
    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/10.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Cambios en hábitos de consumo
              p.mb-0 Corresponden a las preferencias, costumbres y comportamientos que tienen las personas al momento de adquirir productos o servicios. Estos hábitos evolucionan con el tiempo debido a factores como la edad, la educación, la tecnología, las tendencias sociales y las nuevas necesidades de los consumidores. Las empresas deben estar atentas a estos cambios para adaptar su oferta y mantenerse competitivas en el mercado.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/11.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Variaciones económicas 
              p.mb-0 Las condiciones económicas tienen un impacto directo en el comportamiento de los consumidores y en el desempeño de las empresas. Factores como la inflación, el desempleo, el crecimiento económico y el nivel de ingresos influyen en la capacidad de compra de las personas.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/12.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Innovación tecnológica
              p Los avances tecnológicos transforman la forma en que las empresas producen, comercializan y distribuyen sus productos o servicios. Asimismo, modifican las expectativas y comportamientos de los consumidores, quienes buscan soluciones más rápidas, eficientes y accesibles. 
              p.mb-0 La incorporación de nuevas tecnologías puede generar ventajas competitivas y abrir nuevas oportunidades de negocio.

          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/13.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Estrategias de la competencia
              p.mb-0 Las acciones desarrolladas por las empresas competidoras también influyen en el comportamiento del mercado. Cambios en precios, promociones, innovación de productos, campañas publicitarias o mejoras en el servicio al cliente pueden afectar las preferencias de los consumidores y modificar la participación de las empresas en el mercado.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema4/14.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Factores culturales y sociales
              p Las costumbres, creencias, valores, tradiciones y estilos de vida de una sociedad influyen en las decisiones de compra de las personas. Los cambios sociales también pueden generar nuevas necesidades y preferencias que impactan directamente el mercado.
              p.mb-0 Las empresas que comprenden estos factores pueden diseñar productos, servicios y estrategias de comunicación más acordes con las expectativas de sus consumidores.
    
    .bg-fondo-3.mb-5.tarjeta.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/17.svg").mx-auto
        .col-lg
          p.mb-0 El crecimiento del comercio electrónico ha modificado el comportamiento del consumidor, priorizando la compra en línea. Empresas como Amazon han fortalecido sus sistemas logísticos con entregas rápidas y centros de distribución automatizados, mientras que Falabella ha integrado sus canales físicos y digitales para ofrecer una experiencia omnicanal. Por su parte, el Grupo Éxito ha impulsado los domicilios y plataformas virtuales, y marcas como Shein han desarrollado modelos digitales basados en tendencias de consumo inmediato, evidenciando la adaptación empresarial frente a los cambios en la demanda del mercado.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
      .col-lg-6
        p.mb-0(data-aos="fade-right") Captura de la plataforma de comercio electrónico Shein que muestra productos de moda organizados por categorías y tendencias, con precios visibles y segmentación por tipo de usuario. La imagen evidencia la dinámica del mercado digital, donde la oferta se adapta rápidamente a las preferencias del consumidor y a las tendencias de consumo en tiempo real.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-5.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.col-lg-2.position-relative
              img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema4/16.png")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Oferta y demanda. Explicado para principiantes
                  p.mb-0 Para fortalecer la comprensión del tema, se invita al siguiente recurso audiovisual, donde se explica cómo el comercio electrónico ha transformado la dinámica del mercado, modificando el comportamiento del consumidor y obligando a las empresas a adaptar su oferta a las nuevas tendencias digitales.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=PvViocJwYRI " target="_blank")
                    span Ir al video
                    i.fa-brands.fa-youtube



</template>

<script>
export default {
  name: 'Tema4',
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
