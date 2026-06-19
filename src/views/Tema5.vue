<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Análisis estratégico
    
    .bg-full-width.bg-fondo-1.px-5
      img(src="@/assets/curso/tema5/1.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-up")
          p.banner-text Las organizaciones se enfrentan constantemente a cambios, desafíos y oportunidades que pueden influir en el logro de sus objetivos. Para desenvolverse de manera efectiva en entornos cada vez más competitivos, es necesario adoptar una visión que permita evaluar la situación actual del negocio y orientar las acciones hacia el futuro. En este contexto, resulta fundamental identificar las condiciones que favorecen o limitan el desarrollo de la organización, con el fin de fortalecer su capacidad de adaptación, mejorar su desempeño y aprovechar de manera eficiente los recursos disponibles para alcanzar resultados sostenibles.
      
      separador
      
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 Concepto

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-right") El análisis estratégico es el proceso mediante el cual una organización examina su entorno interno y externo con el propósito de formular estrategias que le permitan alcanzar sus objetivos y mejorar su competitividad. Este análisis integra variables como recursos, capacidades, competencia, tendencias del mercado y condiciones del entorno, facilitando la toma de decisiones informadas.
          .cajon.color-acento-contenido.bg-color-2.p-4
            p.mb-0 Para su desarrollo, las empresas utilizan diversas herramientas de análisis como la matriz DOFA, el análisis PESTEL, el modelo de las cinco fuerzas de Porter y el análisis de la cadena de valor, las cuales permiten evaluar de manera estructurada los factores que influyen en el desempeño organizacional. Estas herramientas contribuyen a identificar oportunidades, reducir riesgos y diseñar estrategias acordes con la realidad del mercado.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2	Matriz DOFA
    
    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.col-lg-3.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema5/3.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/4.png", data-aos="zoom-in")
          .col-lg-7
            .bg-color-3.px-5.py-4
              p.mb-0 La matriz DOFA es una herramienta estratégica ampliamente utilizada para diagnosticar la situación interna y externa de una organización. En el contexto de los negocios electrónicos, esta matriz adquiere especial relevancia, ya que permite analizar de manera estructurada cómo las capacidades internas de la empresa interactúan con las condiciones cambiantes del entorno digital.  
        .bg-color-4.px-5.py-4
          p.mb-0 La matriz DOFA facilita una visión integral del negocio electrónico al identificar los factores que fortalecen o limitan su desempeño interno, así como las oportunidades y amenazas derivadas del mercado, la tecnología, la competencia y el comportamiento del consumidor digital. 
    
    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-botones.bg-color-13.p-4.mb-5
          p.mb-0.text-center Su aplicación contribuye a una toma de decisiones más objetiva y alineada con la realidad del entorno.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Composición 
    
    .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La composición de la matriz DOFA se basa en el análisis de cuatro elementos clave que permiten evaluar la posición estratégica del negocio electrónico. Estos elementos se clasifican en factores internos y externos, los cuales influyen directamente en la competitividad y sostenibilidad de la organización en el mercado digital.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Matriz DOFA
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/6.png", alt="La estructura del análisis DOFA se destacan cuatro cuadrantes: Fortalezas, Debilidades, Oportunidades y Amenazas. Cada sección incluye una breve descripción y tres ejemplos relacionados con negocios electrónicos, organizados alrededor de un círculo central que representa la integración de los cuatro componentes del análisis estratégico.")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/6-1.png", alt="La estructura del análisis DOFA se destacan cuatro cuadrantes: Fortalezas, Debilidades, Oportunidades y Amenazas. Cada sección incluye una breve descripción y tres ejemplos relacionados con negocios electrónicos, organizados alrededor de un círculo central que representa la integración de los cuatro componentes del análisis estratégico.")
        figcaption Nota. SENA, 2026.

    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-botones.bg-color-13.p-4.mb-5
          p.mb-0.text-center Esta composición permite organizar la información de manera clara y facilita la posterior formulación de estrategias.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estrategias DOFA
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/7.png", data-aos="zoom-in")
      .col-lg-6
        p(data-aos="fade-right") Las estrategias DOFA se formulan a partir de la relación entre los factores internos y externos identificados en la matriz. En los negocios electrónicos, estas estrategias buscan fortalecer la competitividad, promover la innovación y garantizar la sostenibilidad del modelo de negocio en un entorno digital altamente dinámico.
        p.mb-0 A partir del análisis DOFA se pueden establecer cuatro tipos de estrategias:
    
    .row.justify-content-center.mb-3
      .col-md-6.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-4.H-100
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/8.png").mx-auto
            .col-lg
              h5 Estrategias FO (fortalezas - oportunidades) 
              p.mb-0 Orientadas al crecimiento, aprovechan las fortalezas internas para capitalizar las oportunidades del entorno digital, como la expansión a nuevos mercados o la adopción de tecnologías emergentes.
      .col-md-6.mb-3.mb-lg-0
        .bg-color-5.tarjeta.p-4.H-100
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/9.png").mx-auto
            .col-lg
              h5 Estrategias DO (debilidades - oportunidades):  
              p.mb-0 Enfocadas en mejorar capacidades internas para aprovechar oportunidades externas, por ejemplo, fortaleciendo competencias digitales o modernizando la infraestructura tecnológica.
    
    .row.justify-content-center.mb-5
      .col-md-6.mb-3.mb-lg-0
        .bg-color-8.tarjeta.p-4.H-100
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/10.png").mx-auto
            .col-lg
              h5 Estrategias FA (fortalezas - amenazas)
              p.mb-0 Buscan proteger el negocio electrónico frente a riesgos externos utilizando sus fortalezas, como diferenciarse por calidad del servicio o reforzar la seguridad digital.
      .col-md-6.mb-3.mb-lg-0
        .bg-color-9.tarjeta.p-4.H-100
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/11.png").mx-auto
            .col-lg
              h5 Estrategias DA (debilidades - amenazas)  
              p.mb-0 Son estrategias defensivas orientadas a minimizar riesgos, reduciendo debilidades internas y evitando amenazas que puedan comprometer la continuidad del negocio.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Estrategias DOFA  
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema5/12.png", alt="Se detalla cuatro bloques, las estrategias DOFA: FO (crecimiento), DO (mejora interna), FA (protección frente a amenazas) y DA (reducción de riesgos). Cada bloque explica cómo la combinación de fortalezas, debilidades, oportunidades y amenazas permite formular acciones estratégicas para fortalecer la competitividad y sostenibilidad de una organización. ")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema5/12-1.png", alt="Se detalla cuatro bloques, las estrategias DOFA: FO (crecimiento), DO (mejora interna), FA (protección frente a amenazas) y DA (reducción de riesgos). Cada bloque explica cómo la combinación de fortalezas, debilidades, oportunidades y amenazas permite formular acciones estratégicas para fortalecer la competitividad y sostenibilidad de una organización. ")
        figcaption Nota. SENA, 2026.
    
    .bg-full-width.bg-fondo-1.px-5
      img(src="@/assets/curso/tema5/13.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-up")
          p.banner-text La correcta formulación de estas estrategias permite que el negocio electrónico no solo responda al entorno, sino que se anticipe a los cambios del mercado digital y fortalezca su posición competitiva a largo plazo.

      .row.justify-content-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Tabla 4.
            span Estrategias DOFA aplicadas a empresas digitales
          .tabla-a.color-primario.mb-5.tbl
            table
              caption Nota. Adaptada David, (2020).
              thead.bg-color-11
                tr.bg-color-10
                  th Estrategia
                  th Descripción
                  th Aplicación
                  th Empresa
              tbody
                tr.bg-color-white
                  td.text-bold FO
                  td Aprovechar fortalezas
                  td Expansión digital
                  td Amazon
                tr.bg-color-sintesis
                  td.text-bold DO
                  td Superar debilidades
                  td Alianzas tecnológicas
                  td Uber
                tr.bg-color-white
                  td.text-bold FA
                  td Enfrentar amenazas
                  td Innovación constante
                  td Netflix
                tr.bg-color-sintesis
                  td.text-bold DA
                  td Reducir riesgos
                  td Diversificación
                  td Google
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Análisis DOFA 
    
    .bg-full-width.bg-fondo-1.px-5
      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-3.mb-3.mb-lg-0.order-2
          figure
            img(src="@/assets/curso/tema5/14.png", data-aos="zoom-in")
        .col-lg-9.order-1.mb-3.mb-lg-0
          .row.justify-content-center.align-items-center.mb-3
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/15.png", data-aos="zoom-in")
            .col-lg-7
              .bg-color-3.px-5.py-4
                p El análisis DOFA permite definir estrategias coherentes con el entorno digital, contribuyendo al fortalecimiento de la competitividad y la sostenibilidad del negocio electrónico.
                p.mb-0 El análisis DOFA es una herramienta estratégica que facilita el diagnóstico integral de la organización mediante la evaluación de factores internos y externos que influyen en su desempeño. Su aplicación apoya la toma de decisiones y la formulación de estrategias, especialmente en contextos dinámicos como los negocios electrónicos. 
          .bg-color-4.px-5.py-4
            p.mb-0 Esta herramienta se basa en dos dimensiones fundamentales: los factores internos, representados por fortalezas y debilidades asociadas a recursos, capacidades y procesos; y los factores externos, expresados en oportunidades y amenazas derivadas del entorno, las cuales, aunque no son controlables, pueden ser gestionadas estratégicamente. 
      

      .cajon.color-acento-botones.bg-color-13.p-4.mb-5
        p.mb-0 El siguiente ejemplo presenta la aplicación del análisis DOFA a una empresa ficticia de comercio electrónico, con el fin de identificar su situación estratégica y orientar la formulación de decisiones en el entorno digital:
    
      .row.justify-content-center
        .col-lg-10
          .tarjeta.bg-color-12.p-4.mb-5
            .row.justify-content-around.align-items-center
              .col-auto.col-lg-2.position-relative
                img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema5/16.png")
              .col-auto.col-lg-10
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h5 Empresa de comercio electrónico: ClickNova Digital S.A.S.
                    p.mb-0 Utiliza la siguiente empresa como ejemplo para desarrollar un análisis DOFA e identificar los factores internos y externos que afectan su desempeño.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_1_Empresa_comercio_electrónico_ClickNova_Digital_S.A.S.pdf')" target="_blank")
                      span Ir al enlace
                      i.fas.fa-link
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema5/18.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        .row.bg-fondo-2.tarjeta.px-5.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/17.png", data-aos="zoom-in")
          .col-lg-8
            h2.text-white(data-aos="fade-left").mb-3 Ir al pódcast
            p.text-white Charlas que venden
            
            TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
              texto="El poder del análisis estratégico"
              tiempo
              :audio="require('../assets/curso/podcast/podcast1.mp3')"
            )

</template>

<script>
export default {
  name: 'Tema5',
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
