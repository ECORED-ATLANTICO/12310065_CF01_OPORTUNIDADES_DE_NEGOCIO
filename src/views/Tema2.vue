<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Segmentación de mercado
    
    img(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10(data-aos="fade-up")
        p.banner-text Los mercados reúnen a personas, empresas y organizaciones que intercambian bienes y servicios para satisfacer necesidades y generar valor. Comprender su funcionamiento permite reconocer oportunidades comerciales, adaptar las estrategias de venta y responder de manera más efectiva a las dinámicas del entorno. Este conocimiento es fundamental para fortalecer la gestión empresarial y mejorar la competitividad de los negocios en diferentes contextos económicos.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Concepto
    
    .bg-full-width.bg-fondo-1.px-5
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-3.mb-lg-0.order-lg-2
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
        .col-lg-8.order-lg-1
          p(data-aos="fade-right") La segmentación de mercado consiste en dividir un mercado en grupos específicos de consumidores que comparten características comunes, con el fin de diseñar estrategias comerciales más precisas y efectivas. Este proceso permite a las organizaciones identificar nichos de mercado, adaptar su oferta de valor y responder de manera diferenciada a las necesidades del cliente.
          .cajon.color-primario.bg-color-2.p-4
            p.mb-0 Netflix segmenta usuarios según comportamiento de visualización para personalizar contenidos. Coca Cola desarrolla diferentes líneas de producto como Zero o Light dirigidas a segmentos específicos según preferencias de consumo. 

      h3 Línea de productos de la marca Coca Cola

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
        .col-lg-8
          .row.justify-content-center.mb-3
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/4.png", data-aos="fade-up")
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/5.png", data-aos="fade-down")
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/6.png", data-aos="fade-up")
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png", data-aos="fade-down")
          .row.justify-content-center.mb-3
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png", data-aos="fade-up")
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png", data-aos="fade-down")
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png", data-aos="fade-up")
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png", data-aos="fade-down")
          .row.justify-content-center.mb-3
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/12.png", data-aos="fade-up")
            .col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/13.png", data-aos="fade-down")
    
    .bg-fondo-3.mb-5.tarjeta.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/14.svg").mx-auto
        .col-lg
          p.mb-0 La figura evidencia cómo Coca Cola segmenta el mercado mediante diversas marcas orientadas a diferentes perfiles de consumo, como bebidas gaseosas, hidratantes, jugos o productos saludables. Esta diversificación permite atender necesidades específicas de cada segmento, optimizando la propuesta de valor y fortaleciendo su posicionamiento en distintos nichos del mercado.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Clasificación
    
    p.mb-5 La segmentación de mercado se clasifica según las variables utilizadas para agrupar a los consumidores, lo que permite comprender sus características y diseñar estrategias diferenciadas.

    h3 Clasificación de la segmentación de mercado

    .bg-full-width.bg-fondo-1.px-5
      .row.mb-5.align-items-center.justify-content-center
        .col-md-8.col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
        .col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
            div(titulo="Demográfica").ms-5
              p Es una de las formas más utilizadas porque clasifica a los consumidores según características objetivas y fáciles de identificar. Se basa en aspectos relacionados con la población y las condiciones socioeconómicas de las personas.
              p <b>Variables principales</b>: edad, género, ingresos, educación.
              p.mb-0 <b>Ejemplo empresarial</b>: productos dirigidos a niños, jóvenes o adultos.
            div(titulo="Geográfica").ms-5
              p Consiste en dividir el mercado según la ubicación física de los consumidores. Parte del principio de que las necesidades, preferencias y hábitos de compra pueden variar dependiendo del lugar donde viven las personas.
              p <b>Variables principales</b>: ubicación, clima, región.
              p.mb-0 <b>Ejemplo empresarial</b>: productos adaptados a zonas urbanas o rurales.
            div(titulo="Psicográfica").ms-5
              p Agrupa a las personas según aspectos relacionados con su personalidad, estilo de vida, intereses, valores, creencias y forma de pensar. A diferencia de la segmentación demográfica, que responde a quién es el cliente, la segmentación psicográfica busca comprender por qué compra y qué factores influyen en sus decisiones.
              p <b>Variables principales</b>: estilo de vida, valores, personalidad.
              p.mb-0 <b>Ejemplo empresarial</b>: marcas <em>fitness</em> o sostenibles.
            div(titulo="Conductual").ms-5
              p Se enfoca en la manera como los consumidores actúan frente a un producto, servicio o marca. Se basa en el comportamiento real de los consumidores más que en sus características personales.
              p <b>Variables principales</b>: hábitos de compra, uso del producto.
              p.mb-0 <b>Ejemplo empresarial</b>: programas de fidelización.

      separador
      
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.3	Características
      
    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/16.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para que una segmentación sea efectiva debe cumplir con condiciones que permitan su aplicación en el entorno empresarial y garanticen resultados en la toma de decisiones. Entre las características están:
    
    .row.mb-5.justify-content-center.align-items-center
      .col-md-8.col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Medible")
            h4 Medible
            p.mb-0 Permite cuantificar el tamaño, características, comportamiento y potencial de compra del segmento, facilitando la obtención de información relevante para la toma de decisiones estratégicas y la evaluación de oportunidades de mercado.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Accesible")
            h4 Accesible
            p.mb-0 El segmento puede ser identificado y alcanzado de manera efectiva mediante estrategias comerciales, canales de comunicación, distribución y acciones de marketing que permitan establecer una relación directa con los clientes potenciales.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Sustancial")
            h4 Sustancial
            p.mb-0 Posee un tamaño y una capacidad de compra suficientes para justificar la inversión de recursos, garantizando que el segmento sea rentable y contribuya al crecimiento sostenible de la organización.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Diferenciable")
            h4 Diferenciable
            p.mb-0 Presenta necesidades, preferencias, comportamientos o características específicas que lo distinguen de otros segmentos, respondiendo de manera diferente a las propuestas de valor y estrategias de marketing implementadas.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Accionable")
            h4 Accionable
            p.mb-0 Permite diseñar e implementar estrategias, programas y acciones concretas de <em>marketing</em>, ventas y servicio, adaptadas a sus características particulares, con el fin de generar resultados medibles y alcanzar los objetivos comerciales establecidos.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-0(data-aos="fade-right") Spotify segmenta a sus usuarios teniendo en cuenta la edad, gustos musicales, hábitos de escucha y tipo de suscripción (gratuita o premium). Gracias a esta segmentación, la plataforma puede enviar recomendaciones personalizadas, generar playlists adaptadas a cada perfil y ofrecer promociones específicas que fomenten la suscripción premium y el engagement de los usuarios.
    
    separador
    
    .bg-full-width.bg-fondo-1.px-5
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.4	Metodología
      
      p.mb-5 La segmentación de mercado se desarrolla mediante un proceso estructurado que permite identificar, analizar y seleccionar segmentos adecuados para la organización.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
        .col-lg-7
          .bg-fondo-2.tarjeta
            .p-4.p-lg-5
              SlyderA(tipo="b").bg-color-white.p-4.tarjeta
                div.justify-content-center.align-items-center.p-3.p-lg-4
                  h4 Identificación del mercado:
                  p.mb-0  Definir el mercado a analizar, identificando las necesidades, características y tendencias de los consumidores que podrían demandar el producto o servicio.
                div.justify-content-center.align-items-center.p-3.p-lg-4
                  h4 Selección de variables: 
                  p.mb-0  Determinar los criterios de segmentación más relevantes, tales como variables geográficas, demográficas, psicográficas y conductuales, para clasificar adecuadamente a los consumidores.
                div.justify-content-center.align-items-center.p-3.p-lg-4
                  h4 Análisis de segmentos: 
                  p.mb-0  Evaluar las características, necesidades, hábitos de consumo, preferencias y comportamiento de cada segmento identificado para comprender su potencial y atractivo.
                div.justify-content-center.align-items-center.p-3.p-lg-4
                  h4 Selección del segmento objetivo: 
                  p.mb-0  Elegir el grupo de consumidores más adecuado para la empresa, considerando factores como rentabilidad, tamaño, crecimiento, accesibilidad y alineación con los objetivos del negocio.
                div.justify-content-center.align-items-center.p-3.p-lg-4
                  h4 Diseño de estrategias: 
                  p.mb-0  Adaptar el producto, precio, distribución y comunicación a las necesidades específicas del segmento objetivo, con el fin de generar mayor valor, diferenciación y fidelización de clientes.
    
    .bg-fondo-3.mb-5.tarjeta.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema2/14.svg").mx-auto
        .col-lg
          p.mb-0 Rappi analiza datos de consumo para segmentar usuarios y ofrecer promociones personalizadas. Bancolombia segmenta clientes para ofrecer productos financieros diferenciados.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-5.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.col-lg-2.position-relative
              img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema2/20.png")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Segmentación de mercados
                  p.mb-0 Para fortalecer la comprensión del tema, se invita al siguiente recurso audiovisual, donde se explica de manera aplicada la segmentación del mercado. Este material facilita la interpretación de los conceptos en contextos empresariales.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=rndPdop69X0  " target="_blank")
                    span Ir al video
                    i.fa-brands.fa-youtube
             
    

            

</template>

<script>
export default {
  name: 'Tema2',
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
