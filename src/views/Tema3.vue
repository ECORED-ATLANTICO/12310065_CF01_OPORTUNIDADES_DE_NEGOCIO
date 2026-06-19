<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Entorno
    
    .bg-full-width.bg-fondo-1.px-5
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-5.mb-3.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
        .col-lg-7
          p.mb-0(data-aos="fade-right") Las organizaciones desarrollan sus actividades en contextos dinámicos donde constantemente surgen cambios, tendencias y nuevas condiciones que pueden influir en su desempeño.  Por esta razón, resulta fundamental mantener una visión amplia del contexto en el que se opera, comprendiendo las situaciones y acontecimientos que pueden impactar directa o indirectamente el desarrollo de las actividades empresariales. Comprender estas condiciones permite actuar de manera más estratégica, fortalecer la capacidad de adaptación y favorecer la sostenibilidad y competitividad de los negocios.
      
      separador
      
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Concepto
      
      .row.justify-content-center.align-items-center.mb-5
        .col-md-8.col-lg-3.col-xl-3.mb-3.mb-xl-0
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
        .col-lg-7.col-xl-5.mb-3.mb-lg-0
          .bg-color-5.p-4.px-lg-5.tarjeta 
            p El entorno empresarial se refiere al conjunto de factores internos y externos que influyen en las decisiones, estrategias y desempeño de una organización. Comprender este entorno es fundamental para anticiparse a los cambios del mercado, adaptarse a nuevas condiciones y mantener la competitividad. 
            .bloque-texto-b.color-secundario(data-aos="fade-up").mb-3
              .bloque-texto-b__texto
                i.fas.fa-quote-left.bg-color-7
                h5.mb-0 Destacan que una lectura adecuada del entorno permite a las empresas aprovechar oportunidades y mitigar amenazas, construyendo ventajas sostenibles en mercados cambiantes.  
                i.fas.fa-quote-right.bg-color-7
              .bloque-texto-d__autor 
                .h5.mb-0 Kotler y Keller (2016). 
        .col-md-8.col-lg-5.col-xl-4.mb-3.mb-xl-0
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Clasificación
    
    .bg-full-width.bg-fondo-1.px-5
      img(src="@/assets/curso/tema3/4.png", alt="Imagen decorativa")
      
      .row.justify-content-center.align-items-center.z-2.mb-5
        .col-lg-10(data-aos="fade-up")
          p.banner-text El entorno empresarial se divide en dos grandes grupos: las variables internas, que son controlables por la empresa, y las variables externas, que se encuentran fuera de su control directo, pero cuya influencia puede ser significativa en el éxito o fracaso del negocio.

      .row.mb-5.align-items-center.justify-content-center
        .col-lg-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
            div(titulo="Variables internas del mercado: ").ms-5
              p Son factores controlables por la empresa que afectan su desempeño en el mercado. Kotler (2016) enfatiza que gestionar estos elementos de manera eficiente puede generar ventajas competitivas sostenibles.
              .row.justify-content-center
                .col-lg-12
                  .titulo-sexto.color-acento-contenido
                    h5 Tabla 2.
                    span Elementos internos del mercado
                  .tabla-a.color-primario.mb-5.tbl
                    table
                      caption Nota. Adaptada de Kotler, P., & Keller, K. L., (2016).
                      thead
                        tr.bg-color-10
                          th Tipo de elemento
                          th Definición
                          th Afectación negativa
                          th Ejemplo negativo
                          th Afectación positiva
                          th Ejemplo positivo
                      tbody
                        tr.bg-color-white
                          td.text-bold Climes
                          td Personas y/o empresas que obtienen productos y/o servicios.
                          td Pérdida de clientes por insatisfacción.
                          td Un mal servicio postventa provoca que los clientes no recompren.
                          td Fidelización y crecimiento del mercado.
                          td Un programa de puntos hace que los clientes regresen con frecuencia.
                        tr.bg-color-sintesis
                          td.text-bold Competencia
                          td Entidades que brindan productos y/o servicios similares.
                          td Reducción de cuota de mercado.
                          td Un competidor lanza un producto más barato y gana clientes.
                          td Innovación y mejora de estrategias comerciales.
                          td Se lanza una versión mejorada que responde mejor a las necesidades del público.
                        tr.bg-color-white
                          td.text-bold Precio
                          td Valor monetario fijado a un producto y/o servicio.
                          td Precios inadecuados pueden afectar la demanda.
                          td Un precio muy alto aleja a los consumidores.
                          td Estrategias de precios competitivos pueden atraer clientes.
                          td Una promoción de precio por volumen genera más ventas.
                        tr.bg-color-sintesis
                          td.text-bold Inversores
                          td Personas y/o entes que invierten en la empresa.
                          td Falta de inversión puede limitar el crecimiento.
                          td No se lanza un nuevo producto por falta de capital.
                          td Capital disponible para expansión y desarrollo.
                          td Inversión permite abrir una nueva sucursal en otra ciudad.
            div(titulo="Variables externas del mercado: ").ms-5
              p Son variables o factores que afectan la competitividad de las empresas y no pueden ser controlados directamente. Porter (2008) destaca que una correcta evaluación de estos factores permite formular estrategias más resilientes.
              .row.justify-content-center
                .col-lg-12
                  .titulo-sexto.color-acento-contenido
                    h5 Tabla 3.
                    span Elementos externos del mercado
                  .tabla-a.color-primario.mb-5.tbl
                    table
                      caption Nota. Adaptado Porter, M. E., (2008).
                      thead
                        tr.bg-color-10
                          th Tipo de elemento
                          th Definición
                          th Afectación negativa
                          th Ejemplo negativo
                          th Afectación positiva
                          th Ejemplo positivo
                      tbody
                        tr.bg-color-white
                          td.text-bold Jurídico
                          td Normas y regulaciones que rigen el mercado.
                          td Regulaciones estrictas pueden limitar operaciones.
                          td Una ley ambiental restringe el uso de ciertos materiales en producción.
                          td Protección al consumidor y seguridad jurídica.
                          td Legislación clara aumenta la confianza del consumidor en los productos nacionales.
                        tr.bg-color-sintesis
                          td.text-bold Internacional
                          td Factores derivados del comercio global.
                          td Mayor competencia en mercados locales.
                          td Ingreso de marcas extranjeras reduce ventas locales.
                          td Expansión comercial y acceso a nuevos mercados.
                          td Un tratado de libre comercio permite exportar sin aranceles.
                        tr.bg-color-white
                          td.text-bold Tecnológico
                          td Avances e innovaciones que impactan el sector.
                          td Obsolescencia rápida de productos y procesos.
                          td Una empresa no se adapta a una nueva tecnología y pierde mercado.
                          td Innovación en productos y mejoras operativas.
                          td Implementación de inteligencia artificial mejora la atención al cliente.
                        tr.bg-color-sintesis
                          td.text-bold Sociocultural
                          td Cambios en las preferencias y valores de la sociedad.
                          td Dificultad para adaptarse a nuevas tendencias.
                          td Producto tradicional pierde relevancia entre jóvenes consumidores.
                          td Creación de productos alineados con la demanda.
                          td Lanzamiento de productos ecológicos para consumidores conscientes.
                        tr.bg-color-white
                          td.text-bold Demográfico
                          td Características de la población que afectan el consumo.
                          td Envejecimiento de la población puede reducir ciertos mercados.
                          td Menor demanda de productos digitales entre adultos mayores.
                          td Identificación de nuevos nichos de mercado.
                          td Aumento de jóvenes urbanos impulsa el consumo de tecnología portátil.
                        tr.bg-color-sintesis
                          td.text-bold Político
                          td Estabilidad y decisiones gubernamentales.
                          td Conflictos y crisis pueden afectar la economía.
                          td Inestabilidad política reduce la inversión extranjera.
                          td Políticas favorables pueden impulsar la inversión.
                          td Incentivos tributarios atraen capital extranjero.
    
    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-5.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.col-lg-2.position-relative
              img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema3/5.png")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Entorno general y especifico de una empresa
                  p.mb-0 Para fortalecer la comprensión del tema, se invita al siguiente recurso audiovisual, donde se explica el entorno general y específico de la empresa; permitiendo comprender cómo los factores externos influyen en el comportamiento del mercado y en la toma de decisiones empresariales.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=SLFcO2P2R4g" target="_blank")
                    span Ir al video
                    i.fa-brands.fa-youtube
 

</template>

<script>
export default {
  name: 'Tema3',
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
