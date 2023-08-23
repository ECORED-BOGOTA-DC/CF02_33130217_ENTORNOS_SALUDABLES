export default {
  global: {
    componenteFormativo: 'Estrategias de entornos saludables',
    descripcionCurso:
      'Los entornos saludables requieren de estrategias que permitan afianzar la implementación de acciones que influyen sobre los determinantes sociales de la salud con proyectos cooperativos y participativos. Durante este proceso formativo se pretende conocer y aplicar la estrategia de entornos saludables desde la interdisciplinariedad de los sectores como: salud, educación, ambiental y participación laboral y social.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Estrategias de Entornos Saludables',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Conceptos de cada uno de los entornos saludables',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Población sujeto',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Escenarios',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Operación de cada entorno',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión territorial y local',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis de actores',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Formulación de Planes de acción intersectoriales de entornos saludables',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Estructura de los planes de acción intersectoriales de entornos saludables',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Participación comunitaria',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procesos de Gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Orientaciones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Alcance',
            hash: 't_3_2',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '1. Estrategias de entornos saludables',
      referencia:
        'Ramírez, M. (2020). Declaración de Adelaida 1988. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iHu9kQz3vYc',
    },
    {
      tema: '2. Gestión territorial y local',
      referencia:
        'MinSalud. (2006). Lineamientos Nacionales para la aplicación y el desarrollo de las estrategias de entornos saludables.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-nacionales-para-la-aplicacion-y-el-desarrollo-de-las-ees.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Entornos saludables',
      significado:
        'el entorno o ambiente es el espacio físico, social y cultural, en donde un individuo, su familia y su comunidad moran cotidianamente (vivienda, escuela, lugar de trabajo, vecindario, vereda, municipio, ciudad) y donde forma relaciones sociales que determinan una manera de vivir y de ser.',
    },
    {
      termino: 'Entorno comunitario',
      significado:
        'se ubican las políticas sociales actuales como: la política social del gobierno nacional, que está enfocada en la reducción de la pobreza y la promoción de la equidad y primera infancia.',
    },
    {
      termino: 'Entorno hogar',
      significado:
        'el hogar, en un sentido amplio, es el escenario de acogida y afecto en el que transcurre parte de la vida de los seres humanos, fundamental desde la perspectiva de familia, el hogar familiar, para el inicio de la vida y de la primera infancia.',
    },
    {
      termino: 'Entorno laboral',
      significado:
        'en este entorno existe la política pública de salud y seguridad en el trabajo entendiendo la salud laboral como la reducción y/o eliminación de los factores de riesgo dentro del centro de trabajo.',
    },
    {
      termino: 'El PAIES',
      significado:
        '<span style="text-transform: uppercase">P</span>lan de Acción Intersectorial de Entornos Saludables.',
    },
    {
      termino: 'Población sujeto',
      significado:
        'las personas, familias y comunidades a quienes van dirigidas las estrategias.',
    },
    {
      termino: 'Escenarios',
      significado: 'lugar donde ocurre una situación o hecho.',
    },
  ],
  referencias: [
    {
      referencia:
        'CONASA. (2016). <em>Lineamientos Nacionales de Entornos</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-entornos-nacionales-2016.pdf',
    },
    {
      referencia:
        'Decreto 1504 de 1998. [Presidencia de la República]. Por el cual se reglamenta el manejo del espacio público en los planes de ordenamiento territorial. Agosto 4 de 1998.',
      link:
        'https://funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=1259',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Directrices para la caracterización y ejecución de los procesos para la Gestión de la Salud Pública en el contexto de la Política de Atención Integral en Salud.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-gsp-v.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2007). <em>Estrategia de entornos saludables</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/plan-de-accion-intersectorial.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018). <em>Estrategia de entorno comunitario saludable</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/estrategia-entorno-comunitario-2019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2009). <em>Manual de gestión territorial</em>.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/manual-de-gestion-territorial-de-la-ees.pdf',
    },
    {
      referencia:
        'Resolución 3202 de 2016. [Ministerio de Salud y Protección Social]. Por la cual se adopta el Manual Metodológico para la elaboración e implementación de las Rutas Integrales de Atención en Salud (RIAS), se adopta un grupo de Rutas Integrales de Atención en Salud desarrolladas por el Ministerio de Salud y Protección Social dentro de la Política de Atención Integral en Salud (PAIS) y se dictan otras disposiciones. Diario Oficial No. 49.947 de 27 de julio de 2016.',
      link:
        'http://normograma.supersalud.gov.co/normograma/docs/resolucion_minsaludps_3202_2016.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Sandra Patricia Diaz Gutiérrez ',
          cargo: 'Experto temático',
          centro:
            'Regional Huila - Centro de la Industria la Empresa y los Servicios',
        },
        {
          nombre: 'Claudia Milena Hernández Naranjo',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
