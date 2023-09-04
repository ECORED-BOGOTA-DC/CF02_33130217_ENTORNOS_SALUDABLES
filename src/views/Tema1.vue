<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estrategias de entornos saludables
    
    <br><br>
    .row.justify-content-end.align-items-center.mb-5
      .col-lg-3.col-6.px-xl-4.img-01.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img01.svg' alt="Imagen decorativa")
      .col-3.d-lg-none.d-flex
      .col-lg-9(data-aos="fade-left")
        .BGT02.px-4.py-lg-5.py-4
          .row.justify-content-end
            .col-lg-10
              p.mb-0 Para comprender la aplicación de estrategias, es importante tener claridad sobre los conceptos básicos de los entornos saludables, sus objetivos, características, tipos de población, escenarios y operación de cada entorno, como a continuación se exponen:
      .col-lg-1.d-lg-flex.d-none
    <br><br>

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Conceptos de cada uno de los entornos saludables

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img02.svg' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p.mb-0 Son escenarios configurados por dinámicas y por condiciones sociales, físicas, ambientales, culturales, políticas y económicas, donde las personas, las familias y las comunidades conviven y en los que se produce una intensa y continua interacción y transformación entre ellos y el contexto que les rodea. Se caracterizan por tener sujetos con roles definidos y una estructura organizativa, que comprende condiciones de base sociodemográfica que pueden ser urbanas o rurales (MinSalud, 2016).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-5
        .bloque-texto-g.img-inv.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img03.jpg')})`}" alt="Imagen decorativa" data-aos="fade-left"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-right")
            p.mb-0 En otras palabras: los entornos se comprenden como los escenarios, espacios o ambientes de vida cotidiana en los cuales los sujetos se desarrollan, donde constituyen su vida de forma subjetiva o cotidiana, construyendo vínculos y relaciones con la vida social, histórica, cultural y política de la sociedad a la que pertenecen, es por ello, que el gobierno busca acciones, lineamientos y normativas para asegurar que estos entornos sean saludables.

      .col-lg-10
        .BGR03.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-3.col-lg-2.px-4
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Lineamientos Nacionales de Entornos 
                  p.mb-0 Para ampliar la información, sobre los Lineamientos Nacionales de Entornos, expedidos por el Ministerio de Salud y Protección Social, se dispone del siguiente enlace:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-entornos-nacionales-2016.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-link

    p Como lo menciona el documento anterior, los entornos saludables son: hogar, educativo, laboral formal e informal, comunitario e institucional.
    p.mb-5 A continuación, se explican cada uno de ellos:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-5
        PasosA.color-acento-contenido(tipo="l")
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              .h4.ms-4 Entorno hogar
              p.ms-4.mb-0 En el entorno hogar confluye un espacio físico que se comparte, donde viven individuos bajo un mismo techo, que comparten ambientes físicos y sociales que rodean la vivienda y hacen parte de una comunidad definida que los relaciona con vecinos, los ubica en barrios y zonas con características similares sociopolíticas, culturales y relacionales.
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img04.svg' alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img05.svg' alt="Imagen decorativa")
            .col-lg-10(data-aos="fade-left")
              .h4.text-start.ms-4 Entorno educativo
              p.text-start.ms-4 El entorno educativo se define como:
              p.text-start.ms-4.mb-0 El escenario de vida cotidiana donde la comunidad educativa desarrolla capacidades a través de procesos de enseñanza/aprendizajes contextualizados, que permiten la construcción social y reproducción de la cultura, el pensamiento, la afectividad, los hábitos y estilos de vida, que le brindarán mejores formas de vivir y relacionarse consigo mismo, con los demás y con el ambiente.
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              .h4.ms-4 Entorno laboral
              p.ms-4.mb-0 El entorno laboral comprendido como: escenarios donde las personas e individuos se organizan para producir bienes y servicios en condiciones que promueven y protegen la salud, brindando bienestar a los trabajadores, sus familias y comunidades, con la participación en la eliminación y mitigación de los factores adversos a su salud. Comprende los escenarios laborales, formales e informales.
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img06.svg' alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-2.col-4.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img07.svg' alt="Imagen decorativa")
            .col-lg-10(data-aos="fade-left")
              .h4.text-start.ms-4 Entorno comunitario
              p.text-start.ms-4.mb-0 Son los espacios donde se dan dinámicas sociales de las personas y los colectivos o grupos de base como redes sociales y comunitarias, organizadas de manera autónoma y solidaria, las cuales pueden compartir características y objetivos comunes y agruparse para desarrollar actividades y representarlas ante instancias nacionales y/o territoriales; también hacen parte los espacios conformados por elementos constitutivos naturales, artificiales y elementos complementarios.
          .row.justify-content-center.align-items-center
            .col-lg-10.order-lg-1.order-2(data-aos="fade-right")
              .h4.ms-4 Entorno institucional
              p.ms-4.mb-0 Está conformado por los espacios intra y extramurales de las IPS públicas y privadas, todas las instituciones que prestan algún tipo de servicio social o de protección y sus relaciones sinérgicas en pro de la consecución de una salud adecuada, la cual se caracteriza porque las instituciones u organizaciones al actuar de manera conjunta y coordinada logran mejorar las condiciones de vida e incidir de manera directa sobre los determinantes ambientales, sanitarios y sociales.
            .col-lg-2.col-4.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img08.svg' alt="Imagen decorativa")
      .col-lg-10
        .row.justify-content-center.align-items-end
          .col.d-lg-flex.d-none
            <br><br>
          .col-xxl-2.col-lg-3.col-4.img-02.zindex-2.px-xxl-0.px-lg-4(data-aos="fade-right")
            img(src='@/assets/curso/tema1/img09.png' alt="Imagen decorativa")
          .col-12.zindex-1(data-aos="fade-left")
            .arrow-down.BGR04.p-4
              .row.justify-content-end
                .col-lg-9
                  .h4 Importante
                  p.mb-0 El país enmarcó inicialmente la estrategia de entornos saludables: principalmente en dos entornos, el de escuela y el de vivienda. Pero de igual forma con las experiencias aprendidas, la creciente gestión intersectorial y las competencias sectoriales, generaron la necesidad de definir el entorno hogar, laboral formal e informal, comunitario, educativo e institucional y resignificar los componentes y líneas operativas de la estrategia, hacia el desarrollo humano, desarrollo sostenible y la calidad de vida, tomando como centro de las acciones e intervenciones a las personas, familias y comunidades (MinSalud, 2016).
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Objetivos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p De manera general, podría decirse que el objetivo de la política de entornos saludables es formular de manera intersectorial, interinstitucional y sectorial, estrategias, intervenciones y acciones para que de una mera sinérgica operen los entornos laboral, educativo, hogar y comunitario e institucional, teniendo en cuenta que cada uno de ellos se rige por unos componentes ya definidos, así como unas líneas de acción específicas; todo esto enmarcado en los enfoques encaminados a modificar los determinantes sociales y políticos de la salud, cuyos sujetos  son moldeables y donde se tenga por finalidad el lograr una mejor calidad de vida del individuo en su familia y la comunidad dentro de las políticas de desarrollo sostenible y mayores posibilidades de desarrollo humano.
        p.mb-0 Así es como se pueden diferenciar los siguientes objetivos generales de la política de los entornos:
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img10.png' alt="Imagen decorativa") 

    SlyderF.mb-5(columnas="col-xl-4 col-lg-6")
      .tarjeta.BGR05.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img11.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Promover la gestión de bienes, infraestructura y servicios en la comunidad de una forma segura, que favorezca la inclusión siendo sostenible e integral.
      .tarjeta.BGR05.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img12.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Generar respuestas integradas para dar solución a las necesidades, articulando la oferta dirigida, las diferencias poblacionales en asocio con los programas sociales.
      .tarjeta.BGR05.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img13.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Incentivar tecnologías de vanguardia que produzcan soluciones sostenibles y efectivas que sumen de manera positiva para una mejor calidad de vida. 
      .tarjeta.BGR05.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img14.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Contribuir al desarrollo y fortalecimiento de valores, actitudes, aptitudes, habilidades tanto del individuo como de la familia y la comunidad.
      .tarjeta.BGR05.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/tema1/img15.svg' alt='Imagen decorativa')
        p.text-center.mb-0 Generar procesos de participación intersectorial buscando alianzas entre lo público y lo privado, para ejecutar acciones para el mejoramiento de cada entorno.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Características de los entornos
    
    .BGM06.pt-4.px-md-5.px-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema1/img16.png' alt="Imagen decorativa")
        .col-lg-9(data-aos="fade-left")
          p Los entornos se caracterizan por tener sujetos con roles definidos y una estructura organizativa, que comprende condiciones de base sociodemográfica que pueden ser urbanas o rurales (MinSalud, 2016).
          p.mb-0 De forma específica, todos los entornos tienen definidas las siguientes características: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador.mb-0
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Son favorecedores de desarrollos humanos sostenibles.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Son promotores del desarrollo de capacidades y habilidades para la vida del individuo, la familia y la comunidad.  
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Son integrales aportando al bienestar holístico desde actividades individuales y colectivas. 
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Logran dar nuevos significados en diferentes prácticas y costumbres que inciden en la forma de relacionarse del individuo, su familia y comunidad. 
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Dan relevancia a la integralidad del concepto de salud, generando estrategias que mejoren la convivencia segura y confiable desde lo individual y lo colectivo.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Proporcionan ambientes de derechos y mejoramiento de la calidad de vida. 
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Garantizan que se den condiciones de seguridad, convivencia, protección y cuidado para lograr el bienestar de individuos y comunidades.
      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img17.svg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img18.svg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        ul.lista-ul--color.lista-ul--separador.mb-0
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Promueven la diversidad desde los enfoques y condiciones especiales de cada comunidad.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Facilitan los procesos de participación social en favor del logro de condiciones para una mejor calidad de vida.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Posibilitan que el individuo desde su propio saber y experiencia sea partícipe del mejoramiento de su salud y su calidad de vida.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Ejercer abogacía para que existan equipamientos e infraestructuras que promuevan el acceso a servicios que logren el mejoramiento de modos, condiciones y estilos de vida saludables.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Generan condiciones integrales transversales desde la potabilización del agua, el saneamiento básico, la infraestructura de los servicios de salud, dinámicas sociales que contribuyen a mejorar modos, condiciones y estilos de vida.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Los entornos se erigen, es decir, se fundamentan como los escenarios, configuran una unidad de gestión que tiene respuestas claras y tangibles desde lo institucional, lo sectorial y sus diversos actores que participan en el bienestar y desarrollo de individuos, familias y comunidades.

    p.mb-5 A continuación, se describen las características de manera específica de cada entorno:

    .BGIMG01.px-lg-5.pt-lg-5.p-4.mb-5(data-aos="zoom-in")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            .h4 Entorno hogar
            ul.lista-ul--color.lista-ul--separador.mb-0
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Crea situaciones de seguridad, apoyo y potenciación de capacidades individuales, familiares y comunitarias, las cuales llevan a buen desarrollo de los miembros del hogar.
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Posibilita el desarrollo de una dinámica relacional que lleva a identificar los sucesos vitales de quienes conviven en los diferentes ciclos del curso de vida.  
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Facilita la transmisión de saberes y costumbres entre las generaciones.  
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Ofrece un espacio tangible que se comparte con adecuadas condiciones de higiene y seguridad, las cuales son sostenibles y seguras, por tanto, brinda condiciones de vivienda estables y seguras.
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Incentiva conocimientos, actitudes y prácticas en relaciones basadas en el respeto, la convivencia sana, que aporten a los procesos de desarrollo de las personas y alimentación saludable.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img19.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            .h4 Entorno educativo
            ul.lista-ul--color.lista-ul--separador.mb-0
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Incentiva que los individuos pongan en práctica los conocimientos y el desarrollo de habilidades, destrezas, competencias, actitudes, aptitudes y prácticas de cuidado (de sí mismo, del otro, del ambiente).
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Fomenta espacios físicos higiénico-sanitarias favorables, seguras y sostenibles para el desarrollo humano y la calidad de vida. Así mismo, facilita el desarrollo de políticas sectoriales e intersectoriales e interinstitucionales para mejorar la calidad de vida de la comunidad educativa e incidir en el entorno de la misma, haciéndolo seguro y confiable.
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Incluye herramientas tecnológicas, sostenibles, que aporten al mejoramiento de la calidad de vida de la comunidad educativa, con enfoque diferencial.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img20.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            .h4 Entorno laboral
            ul.lista-ul--color.lista-ul--separador.mb-0
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Incentiva actividades que logran identificar los peligros, evaluar el riesgo y potencializar los factores protectores, de este modo llevan a que se desarrollen acciones y condiciones seguras en el trabajo, esto lo hace por medio de adecuar condiciones físicas, psicológicas, sociales y ambientales sostenibles,  enmarcados en la participación social, así mismo prioriza la creación de acuerdos entre los trabajadores y los demás actores que promueven la salud y fomentan la adecuación de infraestructuras haciéndolas seguras y con condiciones sanitarias adecuadas.
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Promueven la implementación de IEC (Información, Educación y Comunicación) para los trabajadores, sus familias y comunidades para identificar problemas y riesgos en el medio laboral. De igual forma, se promueve el desarrollo de iniciativas ya probadas en las empresas para cuidar a los trabajadores.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img21.png' alt="Imagen entorno laboral donde muestra un individuo, un superior y un maletín")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            .h4 Entorno comunitario
            ul.lista-ul--color.lista-ul--separador.mb-0
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                p.mb-0 #[strong Posibilitan]: #[strong a]&#41; Fortalecer las capacidades de los individuos en el ejercicio de la participación social, permitiéndoles ser líderes, auto gestionarse y reconocer su responsabilidad en el logro de la salud y la calidad de vida; #[strong b]&#41; Adquirir mediante IEC (información, educación y comunicación) y hábitos una adecuada nutrición y reducción del sedentarismo; #[strong c]&#41; Integrar todos los entornos, garantizando diferenciación, diversidad y patrones culturales específicos.
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                p.mb-0 #[strong Facilitan]: #[strong a]&#41; La oferta de infraestructuras, servicios y bienes de salud y sanitarios orientadas al cuidado y al desarrollo sostenible de individuos, familias y comunidad; #[strong b]&#41; El fomento de hábitos nutricionales adecuados y saludables; #[strong c]&#41; Integra todos los entornos.  
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                p.mb-0 #[strong Ejerce]: abogacía en los ámbitos político y social para mejorar el cuidado y el uso adecuado del espacio público, así como su mejoramiento.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img22.png' alt="Imagen entorno comunitario, reunión de personas.")
        .row.justify-content-center
          .col-lg-8.order-lg-1.order-2
            .h4 Entorno institucional
            ul.lista-ul--color.lista-ul--separador.mb-0
              li
                i.fas.fa-check-circle(style="color: #59BEE2;")
                | Posibilitan la ejecución de acciones dentro de los enfoques generales de los entornos, además de garantizar hospitales verdes y saludables, condiciones sanitarias adecuadas según los servicios habilitados por las IPS, articulando esfuerzos sectoriales e intersectoriales para el mejoramiento de la calidad de vida y la salud de las personas.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img23.png' alt="Imagen de entorno institucional donde muestra una enfermera calibrando equipos.")

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Población sujeto

    <br><br>
    .row.justify-content-end.align-items-end.mb-5
      .col-xxl-2.col-lg-3.col-4.px-xl-5.img-03.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img24.svg' alt="Imagen decorativa")
      .col-4.d-lg-none.d-flex
      .col-lg-9(data-aos="fade-left")
        .BGT07.px-4.py-lg-5.py-4
          .row.justify-content-end
            .col-lg-10
              p.mb-0 Todas las estrategias de los entornos van direccionadas hacia las personas, familias y comunidades, con el objetivo de incidir de manera positiva en la calidad de vida, el desarrollo sostenible y el desarrollo humano; así como la reducción de riesgos mediante la transformación de los entornos en los cuales viven y se desarrollan individuos familias y comunidades.
      .col-lg-1.d-lg-flex.d-none

    .BGM02.py-4.px-md-5.px-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.order-lg-1.order-2
          p.mb-0 La interrelación que existe entre el concepto de entornos y población sujeto es: “los escenarios de vida cotidiana en los cuales los sujetos se desarrollan, donde constituyen su vida subjetiva, construyen vínculos y relaciones con la vida social, histórica, cultural y política de la sociedad a la que pertenecen. Son escenarios configurados por dinámicas y por condiciones sociales, físicas, ambientales, culturales, políticas y económicas, donde las personas, las familias y las comunidades conviven y en los que se produce una intensa y continua interacción y transformación entre ellos y el contexto que les rodea. Se caracterizan por tener sujetos con roles definidos y una estructura organizativa, que comprende condiciones de base socio-demográfica que pueden ser urbanas o rurales” (MinSalud, 2018) (ver tabla 1).
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema1/img25.svg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Tabla 1.
          span Entornos y población sujeto
        table(data-aos="zoom-in"  alt="Tabla 1. Componentes de entornos y población sujeto, entorno y problación sujeta.")
          caption Nota. <a style="font-weight: 400">MinSalud (2018).</a>
          thead
            tr
              th(style="background-color: #288640; border: 2px solid #D3D3D3; width: 30%; font-size: 18px;").text-white.text-center Entorno
              th(style="background-color: #288640; border: 2px solid #D3D3D3; width: 70%; font-size: 18px;").text-white.text-center Población sujeto
          tbody
            tr
              th(style="border: 2px solid #D3D3D3;") Hogar
              td(style="border: 2px solid #D3D3D3;") Personas<br>Familias
            tr
              th(style="border: 2px solid #D3D3D3;") Educativo
              td(style="border: 2px solid #D3D3D3;") Estudiantes<br>Padres de familia<br>Directivos educadores<br>Personal administrativo
            tr
              th(style="border: 2px solid #D3D3D3;") Laboral
              td(style="border: 2px solid #D3D3D3;") Trabajadores informales<br>Mujeres rurales trabajadoras<br>Adultos mayores trabajadores <br>Personas trabajadoras con discapacidad<br>Trabajadores formales cubiertos por el SGSSS en el trabajo
            tr
              th(style="border: 2px solid #D3D3D3;") Comunitario 
              td(style="border: 2px solid #D3D3D3;") Grupos de base comunitaria <br>Organizaciones<br>Redes apoyo sociales<br>Comunidad en general
            tr
              th(style="border: 2px solid #D3D3D3;") Institucional
              td(style="border: 2px solid #D3D3D3;") Personas, familias con atención en salud (IPS)<br>Personas, familias y comunidades que transitan por servicios sociales o protección integral<br>Personas privadas de la libertad <br>Personas de las fuerzas militares <br>Personas que transitan por conventos<br>Personas que transitan por centro vida
            tr
              th(style="border: 2px solid #D3D3D3;") Todos pueden transitar por los entornos. Población intervenida con la articulación de programas de Salud Pública.
              td(style="border: 2px solid #D3D3D3;") Hombres que tienen relaciones sexuales con hombres<br>Mujeres transgénero<br>Personas en situación de prostitución<br>Usuario de drogas inyectables<br>Habitantes de calle

    separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Escenarios de los diferentes entornos

    p Los escenarios que garantizan la promoción de la salud corresponden a espacios familiares y a lugares donde las personas estudian, trabajan y se recrean. Todos ellos propicios para el desarrollo humano.
    p.mb-5 Los diferentes entornos tienen sus escenarios de desarrollo influenciando al individuo, la familia y la comunidad o sinergia según la siguiente descripción: 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BGR08")
          div(titulo="Escenarios del entorno institucional")
            p.mb-0 Son las entidades como: IPS (Instituciones Prestadoras de Salud), organizaciones que prestan servicios sociales y de protección.
          div(titulo="Escenarios del entorno hogar")
            p.mb-0 Son los espacios como: viviendas donde conviven o confluyen personas con lazos de consanguinidad, afecto o afinidad, barrios. 
          div(titulo="Escenarios del entorno comunitario")
            p.mb-0 Son los grupos o lugares donde confluyen individuos, familias o comunidades conformados para objetivos comunes sociales, culturales, económicos, ambientales y políticos. 
          div(titulo="Escenarios del entorno educativo")
            p.mb-0 Son los establecimientos educativos como: instituciones de educación inicial, preescolar, básica, media y superior. Sitios donde se realice capacitación para el desempeño y el trabajo en educación no formal.
          div(titulo="Escenarios del entorno laboral")
            p.mb-0 Son espacios aptos y especializados para: oficinas o sitios de trabajo formal y sitios de trabajo informal o independiente. 

      .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img26.svg' alt="Imagen decorativa")

    separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.6 Operación de cada entorno

    p.mb-5 Una vez visto el concepto, la clasificación, los escenarios de los entornos, es importante comprender la manera como opera cada uno de ellos, en virtud de sus componentes y líneas de acción. Sin embargo, puede describirse la operación de cada uno de ellos, teniendo en cuenta las siguientes variables:

    .row.justify-content-center.mb-5
      .col-lg-6
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img27.svg' alt="Muestra imagen con 3 variables:<br>1. Contexto territorio<br>2. Sujetos que se aborden<br>3. Caracterización social y ambiental del entorno") 

    p.mb-5 La operación de los entornos como ya se mencionó se da en un marco normativo general que tiene seis (6) componentes, cada uno con sus líneas de acción (ver tabla 2):
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-primario(data-aos="fade-right")
          h5 Tabla 2.
          span Componentes de la operación de los entornos
        table(data-aos="zoom-in"  alt="Tabla 2. Componentes de la operación de los entornos, entorno, nombre y líneas de acción.")
          caption Nota. <a style="font-weight: 400">MinSalud (2016).</a>
          thead
            tr
              th(style="background-color: #288640; border: 2px solid #D3D3D3; width: 15%; font-size: 18px;").text-white.text-center Entorno
              th(style="background-color: #288640; border: 2px solid #D3D3D3; width: 25%; font-size: 18px;").text-white.text-center Nombre
              th(style="background-color: #288640; border: 2px solid #D3D3D3; width: 60%; font-size: 18px;").text-white.text-center Líneas de acción
          tbody
            tr
              th(style="border: 2px solid #D3D3D3;").text-center 1
              td(style="border: 2px solid #D3D3D3;") Políticas y normatividad para la promoción del desarrollo humano, la calidad de vida y el desarrollo sostenible.
              td(style="border: 2px solid #D3D3D3;")
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Formulación, implementación, adopción, consolidación, seguimiento y evaluación de políticas. 
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Armonización y articulación de políticas e instrumentos (nacionales, territoriales, institucionales).
            tr
              th(style="border: 2px solid #D3D3D3;").text-center 2
              td(style="border: 2px solid #D3D3D3;") Ambientes que favorecen el desarrollo humano, la calidad de vida y el desarrollo sostenible.
              td(style="border: 2px solid #D3D3D3;") 
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Implementación y fortalecimiento de estrategias de promoción de espacios físicos, sociales y ambientales seguros, incluyentes, equitativos y sostenibles. 
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Consolidación y acuerdos intersectoriales para la promoción de entornos saludables. 
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Coordinación y articulación para la gestión de infraestructuras, bienes y servicios seguros, incluyentes y sostenibles.
            tr
              th(style="border: 2px solid #D3D3D3;").text-center 3
              td(style="border: 2px solid #D3D3D3;") Gestión de servicios sociales, orientados a la respuesta integral e integrada para el desarrollo humano, la calidad de vida y el desarrollo sostenible.
              td(style="border: 2px solid #D3D3D3;")
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Identificación y análisis de necesidades, brechas y potencialidades sociales y de salud para la promoción de entornos saludables. 
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Gestión para la dinamización de respuestas integrales e integradas. 
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Fortalecimiento de redes y alianzas estratégicas para dinamización de respuestas integrales. 
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Fortalecimiento de las entidades territoriales.
            tr
              th(style="border: 2px solid #D3D3D3;").text-center 4
              td(style="border: 2px solid #D3D3D3;") Educación integral e integrada para la promoción del desarrollo humano, la calidad de vida y el desarrollo sostenible.
              td(style="border: 2px solid #D3D3D3;")
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Diseño e implementación de procesos de información y herramientas de educación y comunicación. 
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Coordinación de acciones sectoriales e intersectoriales orientadas a generar procesos de formación. 
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Fortalecimiento de capacidades institucionales para el desarrollo de procesos formativos.
            tr
              th(style="border: 2px solid #D3D3D3;").text-center 5
              td(style="border: 2px solid #D3D3D3;") Participación social y comunitaria para el desarrollo humano, la calidad de vida y el desarrollo sostenible.
              td(style="border: 2px solid #D3D3D3;")
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Fortalecimiento de capacidades individuales, colectivas, institucionales para el ejercicio de la ciudadanía.
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Gestión para el fortalecimiento de la participación social en los 31 espacios y mecanismos establecidos.
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Conformación y/o fortalecimiento de redes o grupos de gestión para la movilización y el control social.
            tr
              th(style="border: 2px solid #D3D3D3;").text-center 6
              td(style="border: 2px solid #D3D3D3;") Gestión del conocimiento para la promoción del desarrollo humano, la calidad de vida y desarrollo sostenible.
              td(style="border: 2px solid #D3D3D3;")
                ul.lista-ul--color
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Articulación con sectores y actores públicos, privados, académicos, ONG y comunitarios para la difusión, gestión y/o construcción del conocimiento.
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Sistematización y apropiación de conocimientos enmarcados en los principios de la investigación social.
                  li
                    i.fas.fa-check-circle(style="color: #59BEE2;")
                    | Investigación e innovación social.

    .BGIMG02.px-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.pt-4.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 A partir de este marco general operativo, se espera que los diferentes sectores públicos y privados proyectan sus procesos, procedimientos, acciones y/o actividades en los entornos, articulando políticas, planes, programas, proyectos y estrategias; vinculando a los ciudadanos, grupos de base comunitaria, organizaciones, redes y demás formas organizativas de la comunidad (MinSalud, 2019).
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          .px-4
            img(src='@/assets/curso/tema1/img28.svg' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
