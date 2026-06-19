<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Información para la toma de decisiones
    
    .row.mb-5.justify-content-center.align-items-center
        .col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/1.png", data-aos="zoom-in")
        .col-lg-8
          p(data-aos="fade-right") La información para la toma de decisiones es un elemento fundamental en el análisis y evaluación de un negocio, ya que permite reducir la incertidumbre, identificar oportunidades y minimizar riesgos. A partir de datos confiables y relevantes, las organizaciones pueden comprender el comportamiento del mercado, anticipar tendencias y definir estrategias adecuadas para el logro de sus objetivos.
          .cajon.color-acento-contenido.bg-color-2.p-4
            p.mb-0 En el contexto empresarial, la información se convierte en un recurso estratégico que facilita la planificación, el control y la mejora continua de los procesos comerciales.
    
    separador
    
    .bg-full-width.bg-fondo-1.px-5
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.1	Fuentes de información
      
      .bloque-texto-g.color-secundario.bg-color-1.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema6/2.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Las fuentes de información corresponden a los diferentes medios a través de los cuales se obtienen datos relevantes para el análisis del mercado y la toma de decisiones empresariales. Estas fuentes pueden clasificarse según su origen y naturaleza.
      
      h3 Tipos de fuentes de información

      .row.mb-5.align-items-center.justify-content-center
        .col-md-8.col-lg-4.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema6/3.png", data-aos="zoom-in")
        .col-lg-8
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
            div(titulo="Fuentes primarias").ms-5
              p Información obtenida directamente del mercado o del consumidor. La información es recolectada por primera vez y responde específicamente a los objetivos de quien realiza la investigación.
              p.mb-0 <b>Ejemplo</b>: encuestas, entrevistas, observación.
            div(titulo="Fuentes secundarias").ms-5
              p Información ya existente recopilada por otras entidades. Son utilizadas para complementar investigaciones y obtener una visión general del contexto antes de realizar procesos de recolección directa.
              p.mb-0 <b>Ejemplo</b>: informes, estudios de mercado.
            div(titulo="Fuentes internas").ms-5
              p Datos generados dentro de la propia organización y contienen información relacionada con sus procesos, operaciones, clientes y resultados.
              p Estas fuentes permiten conocer la situación actual de la empresa y evaluar su desempeño.
              p.mb-0 <b>Ejemplo</b>: ventas, inventarios..
            div(titulo="Fuentes externas").ms-5
              p Información proveniente del entorno, y suministran información sobre factores externos que pueden influir en el desempeño de la organización. Permiten conocer las condiciones del mercado, la competencia, las tendencias y los cambios del entorno empresarial.
              p.mb-0 <b>Ejemplo</b>: cámaras de comercio, entidades gubernamentales.
      p El uso adecuado de estas fuentes permite obtener información confiable y relevante para la toma de decisiones estratégicas.
    
    separador
    
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Técnicas de recolección de datos
    
    p Las técnicas de recolección de datos son herramientas utilizadas para obtener información del mercado de manera organizada y sistemática. Estas técnicas permiten conocer las necesidades, preferencias y comportamientos de los consumidores. Entre las principales técnicas de recolección están:

    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema6/4.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Encuestas
              p.mb-0 Son una de las técnicas más utilizadas para recopilar información de un grupo de personas mediante un conjunto de preguntas previamente diseñadas. Su propósito es obtener datos cuantitativos y cualitativos sobre opiniones, comportamientos, preferencias, necesidades o niveles de satisfacción.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema6/5.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Entrevistas 
              p.mb-0 Es una técnica basada en la comunicación directa entre el investigador y una persona o grupo de personas con el fin de obtener información detallada sobre un tema específico, las entrevistas permiten profundizar en las respuestas y comprender mejor las opiniones, experiencias, percepciones y motivaciones de los participantes.
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema6/6.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Observación
              p La observación consiste en recopilar información mediante la percepción directa de comportamientos, situaciones o acontecimientos en su entorno natural, sin intervenir en ellos.
              p.mb-0 Esta técnica permite identificar acciones, hábitos y comportamientos reales que, en ocasiones, no son expresados por las personas durante una encuesta o entrevista.

          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-lg-4.mb-3.mb-lg-0.order-lg-2
              figure
                img(src='@/assets/curso/tema6/7.png', alt='')
            .col-lg-8.mb-4.mb-md-0.order-lg-1
              h4 Grupos focales (<em>focus group</em>)
              p.mb-0 Son una técnica de investigación que reúne a un pequeño grupo de personas para discutir un tema específico bajo la orientación de un moderador. El objetivo es conocer opiniones, percepciones, actitudes y reacciones frente a productos, servicios, ideas o situaciones determinadas.
    
    .row.justify-content-center
      .col-lg-9
        .cajon.color-acento-botones.bg-color-13.p-4.mb-5
          p.mb-0.text-center Estas técnicas permiten recopilar datos relevantes que apoyan la toma de decisiones en el ámbito empresarial.

    separador
    
    .bg-full-width.bg-fondo-1.px-5
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 6.3 Aplicativos de gestión
    
      img(src="@/assets/curso/tema6/8.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-up")
          p.banner-text Los aplicativos de gestión son herramientas tecnológicas utilizadas para organizar, almacenar y analizar la información dentro de una empresa. Estos sistemas permiten optimizar procesos y facilitar la toma de decisiones.
      
      .row.justify-content-center
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Tabla 5.
            span Aplicativos de gestión
          .tabla-a.color-primario.mb-5.tbl
            table
              caption Nota. SENA, (2026).
              thead.bg-color-11
                tr.bg-color-10
                  th Aplicativo
                  th Función
                  th Ejemplo
              tbody
                tr.bg-color-white
                  td.text-bold <em>CRM</em>
                  td Permite gestionar la información de los clientes, mejorar la relación comercial, realizar seguimiento a ventas y fortalecer la fidelización.
                  td Salesforce
                tr.bg-color-sintesis
                  td.text-bold <em>ERP</em>
                  td Integra y automatiza los procesos internos de la empresa como finanzas, inventarios, producción y recursos humanos en un solo sistema.
                  td SAP
                tr.bg-color-white
                  td.text-bold Software de análisis de datos
                  td Facilita el procesamiento, análisis e interpretación de grandes volúmenes de datos mediante reportes, gráficos y paneles de control.
                  td Power BI, Excel
                tr.bg-color-sintesis
                  td.text-bold Herramientas de encuestas
                  td Permiten recolectar información del mercado y de los clientes mediante formularios digitales para apoyar la toma de decisiones.
                  td Google Forms

    .row.justify-content-center
      .col-lg-8
        .cajon.color-acento-botones.bg-color-13.p-4.mb-5
          p.mb-0 El uso de estos aplicativos permite centralizar la información, mejorar la comunicación interna y fortalecer la gestión empresarial.

    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Procesamiento de información con aplicativos de gestión

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/9.png", data-aos="zoom-in")
      .col-lg-7
        p.mb-0(data-aos="fade-right") El procesamiento de la información consiste en transformar los datos recolectados en información útil para la toma de decisiones. Este proceso incluye la organización, análisis e interpretación de los datos mediante herramientas tecnológicas. Existen 4 etapas del procesamiento de la información como lo son la recolección, organización, análisis e interpretación.
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Etapas del procesamiento de la información
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema6/10.png", alt="La figura presenta el ciclo de procesamiento de datos en cuatro etapas organizadas en un diagrama circular; que representan las fases del procesamiento de la información., las cuales son: Recolección, que consiste en obtener datos de fuentes internas y externas. Organización, enfocada en clasificar y estructurar la información. Análisis, donde los datos se interpretan mediante herramientas tecnológicas para identificar patrones y tendencias. Interpretación, que transforma los resultados en conclusiones para apoyar la toma de decisiones. También incluye un apartado sobre la utilidad del procesamiento de la información y menciona herramientas como formularios digitales, CRM, ERP, Power BI y Excel. Finalmente se destaca que los datos se convierten en información y posteriormente en conocimiento para tomar mejores decisiones. ")
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema6/10-1.png", alt="La figura presenta el ciclo de procesamiento de datos en cuatro etapas organizadas en un diagrama circular; que representan las fases del procesamiento de la información., las cuales son: Recolección, que consiste en obtener datos de fuentes internas y externas. Organización, enfocada en clasificar y estructurar la información. Análisis, donde los datos se interpretan mediante herramientas tecnológicas para identificar patrones y tendencias. Interpretación, que transforma los resultados en conclusiones para apoyar la toma de decisiones. También incluye un apartado sobre la utilidad del procesamiento de la información y menciona herramientas como formularios digitales, CRM, ERP, Power BI y Excel. Finalmente se destaca que los datos se convierten en información y posteriormente en conocimiento para tomar mejores decisiones. ")
        figcaption Nota. SENA, 2026.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-5.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.col-lg-2.position-relative
              img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema6/11.png")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Taller - <em>Business Intelligence</em>. Integración entre <em>Power BI</em> y SAP <em>Business One</em>
                  p.mb-0 Para fortalecer la comprensión del tema, se invita a ir al siguiente recurso audiovisual, donde se explican los sistemas empresariales como ERP, CRM y herramientas de análisis de datos, destacando su importancia en la integración de la información y la toma de decisiones dentro de las organizaciones. Este recurso permite comprender cómo los aplicativos de gestión facilitan la coordinación de procesos y mejoran el desempeño empresarial.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=E89tYdFnqS0" target="_blank")
                    span Ir al video
                    i.fa-brands.fa-youtube
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-2
        figure
          img(src="@/assets/curso/tema6/13.png", data-aos="zoom-in")
      .col-lg-7.order-1.mb-3.mb-lg-0
        .row.bg-fondo-2.tarjeta.px-5.py-4.align-items-center.justify-content-center
          .col-md-6.col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema6/12.png", data-aos="zoom-in")
          .col-lg-8
            h2.text-white(data-aos="fade-left").mb-3 Ir al pódcast
            p.text-white Charlas que venden
            
            TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
              texto="La gestión de la información para tomar decisiones"
              tiempo
              :audio="require('../assets/curso/podcast/podcast2.mp3')"
            )

</template>

<script>
export default {
  name: 'Tema6',
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
