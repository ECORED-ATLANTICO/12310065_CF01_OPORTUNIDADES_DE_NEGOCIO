<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos del análisis y evaluación de negocio',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de conceptos y variables del mercado y el entorno para la evaluación de ideas de negocio.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!.',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es un mercado desde el enfoque empresarial?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un establecimiento comercial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un entorno donde interactúan compradores y vendedores para intercambiar bienes y servicios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un sistema contable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un canal de distribución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El mercado es el entorno donde interactúan compradores y vendedores para intercambiar bienes y servicios.',
          mensaje_incorrecto:
            'Revise nuevamente el concepto de mercado desarrollado en el componente formativo.',
        },
        {
          id: 2,
          texto: '¿Cuál de los siguientes corresponde a un mercado global?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tienda de barrio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Papelería local.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Minimercado regional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Amazon.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Amazon opera a nivel internacional y es un ejemplo de mercado global.',
          mensaje_incorrecto:
            'Revise nuevamente la clasificación de los mercados.',
        },
        {
          id: 3,
          texto: '¿Cuál es un beneficio del análisis de mercados?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar oportunidades de negocio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Incrementar impuestos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar riesgos totalmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis de mercados permite identificar oportunidades y necesidades no satisfechas.',
          mensaje_incorrecto:
            'Revise nuevamente los beneficios del análisis de mercados.',
        },
        {
          id: 4,
          texto: '¿Qué busca la segmentación de mercado?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar la competencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Dividir el mercado en grupos con características similares.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la oferta disponible.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La segmentación agrupa consumidores con características y necesidades similares.',
          mensaje_incorrecto:
            'Revise nuevamente el concepto de segmentación de mercado.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es un tipo de segmentación basado en edad, género e ingresos?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Psicográfica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Demográfica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Conductual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Geográfica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La segmentación demográfica considera variables como edad, género e ingresos.',
          mensaje_incorrecto:
            'Revise nuevamente los tipos de segmentación de mercado.',
        },
        {
          id: 6,
          texto: '¿Cuál es una característica de una segmentación efectiva?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser medible.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ser aleatoria.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ser ilimitada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ser informal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una segmentación debe ser medible para cuantificar su tamaño y características.',
          mensaje_incorrecto:
            'Revise nuevamente las características de la segmentación efectiva.',
        },
        {
          id: 7,
          texto: '¿Cuál es el último paso de la metodología de segmentación?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seleccionar variables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Analizar segmentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar estrategias.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Después de seleccionar el segmento objetivo se diseñan las estrategias correspondientes.',
          mensaje_incorrecto:
            'Revise nuevamente la metodología de segmentación.',
        },
        {
          id: 8,
          texto: '¿Qué son las variables internas del entorno?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores internacionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Factores jurídicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Factores controlables por la empresa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Factores políticos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las variables internas son controlables y gestionadas directamente por la organización.',
          mensaje_incorrecto:
            'Revise nuevamente la clasificación del entorno empresarial.',
        },
        {
          id: 9,
          texto: '¿Cuál de los siguientes es un elemento interno del mercado?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factor político.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Clientes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Factor tecnológico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Factor jurídico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los clientes forman parte de los elementos internos analizados por la empresa.',
          mensaje_incorrecto:
            'Revise nuevamente los elementos internos del mercado.',
        },
        {
          id: 10,
          texto: '¿Cuál es un ejemplo de variable externa del entorno?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factor tecnológico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Clientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Precio interno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inversores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los factores tecnológicos hacen parte del entorno externo de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente las variables externas del mercado.',
        },
        {
          id: 11,
          texto: '¿Qué estudia la dinámica del mercado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los estados financieros de una empresa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El comportamiento cambiante de la oferta y la demanda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La estructura organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los procesos contables.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La dinámica del mercado analiza las variaciones de la oferta y la demanda y su impacto en las decisiones empresariales.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con dinámica del mercado.',
        },
        {
          id: 12,
          texto: '¿Qué es la oferta en un mercado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de bienes o servicios que los productores están dispuestos a vender.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Las necesidades de los consumidores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El nivel de competencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El comportamiento financiero de una empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La oferta representa los bienes o servicios que los productores ponen a disposición del mercado.',
          mensaje_incorrecto:
            'Revise nuevamente los conceptos de oferta y demanda.',
        },
        {
          id: 13,
          texto: '¿Qué ocurre cuando la demanda supera la oferta disponible?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los precios disminuyen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La demanda desaparece.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los precios tienden a aumentar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El mercado deja de funcionar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Cuando la demanda es mayor que la oferta, los precios suelen incrementarse.',
          mensaje_incorrecto:
            'Revise nuevamente la relación entre oferta y demanda.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de los siguientes factores influye en el comportamiento del mercado?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambios en los hábitos de consumo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El color de los escritorios de oficina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ubicación de archivos físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El diseño de formatos internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los hábitos y preferencias de los consumidores influyen directamente en el mercado.',
          mensaje_incorrecto:
            'Revise nuevamente los factores que afectan el comportamiento del mercado.',
        },
        {
          id: 15,
          texto: '¿Qué es el análisis estratégico?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un sistema contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un proceso para evaluar factores internos y externos y apoyar la toma de decisiones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un método de facturación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una técnica de archivo documental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El análisis estratégico permite comprender el entorno y definir acciones empresariales adecuadas.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con análisis estratégico.',
        },
        {
          id: 16,
          texto:
            '¿Cuál de las siguientes herramientas se utiliza en el análisis estratégico?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Matriz DOFA.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Libro mayor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Balance de prueba.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Kardex.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La matriz DOFA es una herramienta utilizada para identificar factores internos y externos.',
          mensaje_incorrecto:
            'Revise nuevamente las herramientas de análisis estratégico.',
        },
        {
          id: 17,
          texto: '¿Qué representa una fortaleza dentro de la matriz DOFA?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un factor externo favorable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una ventaja o capacidad interna de la organización.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una amenaza del entorno.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una condición negativa del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las fortalezas son capacidades y recursos internos que favorecen el desempeño de la organización.',
          mensaje_incorrecto:
            'Revise nuevamente la estructura de la matriz DOFA.',
        },
        {
          id: 18,
          texto: '¿Qué representan las oportunidades en la matriz DOFA?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Factores internos negativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Factores externos favorables que pueden aprovecharse.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Recursos financieros de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Procesos administrativos internos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las oportunidades son situaciones externas que pueden generar beneficios para la organización.',
          mensaje_incorrecto:
            'Revise nuevamente los elementos de la matriz DOFA.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es una fuente confiable para la toma de decisiones empresariales?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Información obtenida mediante técnicas de recolección de datos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Opiniones sin evidencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suposiciones personales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Rumores del mercado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La toma de decisiones debe basarse en información objetiva y verificable.',
          mensaje_incorrecto:
            'Revise nuevamente las fuentes de información para la toma de decisiones.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el propósito de utilizar información en la toma de decisiones empresariales?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la incertidumbre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la competitividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir el análisis estratégico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Apoyar decisiones fundamentadas y reducir riesgos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La información confiable permite tomar decisiones más acertadas y disminuir los riesgos empresariales.',
          mensaje_incorrecto:
            'Revise nuevamente los contenidos relacionados con toma de decisiones empresariales.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
