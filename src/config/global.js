export default {
  global: {
    Name: 'Análisis y evaluación de negocio',
    Description:
      'El componente formativo aborda el estudio del mercado, el entorno y las variables que influyen en la generación y validación de ideas de negocio. Analiza elementos como el comportamiento del mercado, la segmentación, el entorno económico y las dinámicas de oferta y demanda, con el propósito de identificar oportunidades y evaluar la viabilidad de propuestas comerciales orientadas a la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Beneficios',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Segmentación de mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Características',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Metodología',
            hash: 't_2_4',
          },
        ],
      },

      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación',
            hash: 't_3_2',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Dinámica del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Oferta y demanda',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Comportamiento del mercado',
            hash: 't_4_3',
          },
        ],
      },

      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis estratégico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Matriz DOFA',
            hash: 't_5_2',
          },
        ],
      },

      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Información para la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Fuentes de información',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas de recolección de datos',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Aplicativos de gestión',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Procesamiento de información con aplicativos de gestión',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /*{
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Amenazas',
      significado:
        'Factores externos que pueden afectar negativamente el desarrollo de una idea de negocio.',
    },
    {
      termino: 'Análisis',
      significado:
        'Proceso de descomposición y estudio de información para comprender una situación o problema.',
    },
    {
      termino: 'Datos',
      significado:
        'Conjunto de hechos o cifras sin procesar que sirven como base para generar información.',
    },
    {
      termino: 'Debilidades',
      significado:
        'Factores internos que limitan el desempeño o desarrollo de una organización o idea de negocio.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de bienes o servicios que los consumidores desean adquirir.',
    },
    {
      termino: 'Entorno',
      significado:
        'Condiciones externas que influyen en el desarrollo de una actividad económica o empresarial.',
    },
    {
      termino: 'Evaluación',
      significado:
        'Proceso de valoración de una idea de negocio para determinar su viabilidad.',
    },
    {
      termino: 'Fortalezas',
      significado:
        'Capacidades internas que favorecen el desarrollo de una organización o idea de negocio.',
    },
    {
      termino: 'Información',
      significado:
        'Datos procesados que adquieren significado y utilidad para la toma de decisiones.',
    },
    {
      termino: 'Investigación',
      significado:
        'Proceso sistemático de recolección y análisis de información.',
    },
    {
      termino: 'Mercado',
      significado:
        'Conjunto de compradores y vendedores que interactúan en el intercambio de bienes o servicios.',
    },
    {
      termino: 'Oferta',
      significado: 'Cantidad de bienes o servicios disponibles para la venta.',
    },
    {
      termino: 'Oportunidades',
      significado:
        'Factores externos favorables que pueden ser aprovechados para el desarrollo de una idea de negocio.',
    },
    {
      termino: 'Procesamiento',
      significado:
        'Transformación de datos en información útil mediante técnicas o herramientas.',
    },
    {
      termino: 'Segmentación',
      significado:
        'División del mercado en grupos con características similares.',
    },
    {
      termino: 'Tendencia',
      significado:
        'Dirección o patrón de comportamiento del mercado en un periodo determinado.',
    },
    {
      termino: 'Variable',
      significado:
        'Elemento que puede cambiar y que influye en el análisis del mercado o del entorno.',
    },
    {
      termino: 'Viabilidad',
      significado:
        'Posibilidad de que una idea de negocio sea ejecutable y sostenible.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República de Colombia. (s. f.). <em>Glosario económico.</em>',
      link: 'https://www.banrep.gov.co/es/glosario',
    },
    {
      referencia:
        'Banco Mundial. (s. f.). <em>Datos e indicadores económicos globales.</em>',
      link: 'https://www.bancomundial.org',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (s. f.). <em>Estadísticas oficiales de Colombia.</em>',
      link: 'https://www.dane.gov.co',
    },
    {
      referencia:
        'Hair, J. F., Black, W. C., Babin, B. J., & Anderson, R. E. (2010). <em>Análisis multivariante</em> (7.ª ed.). Pearson.',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2006). <em>Dirección de marketing.</em> Pearson.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14585/mod_resource/content/1/libro%20direccion-de-marketing%28kotler-keller_2006%29.pdf',
    },
    {
      referencia:
        'Laudon, K. C., & Laudon, J. P. (2012). <em>Sistemas de información gerencial</em> (12.ª ed.). Pearson.',
    },
    {
      referencia:
        'Malhotra, N. K. (2008). <em>Investigación de mercados</em> (5.ª ed.). Pearson.',
    },
    {
      referencia: 'Quiroa, M. (2021). <em>Análisis PESTEL.</em> Economipedia.',
      link: 'https://economipedia.com/definiciones/analisis-pestel.html',
    },
    {
      referencia:
        'Sapag Chain, N. (2011). <em>Preparación y evaluación de proyectos</em> (5.ª ed.). McGraw-Hill.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de la línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
