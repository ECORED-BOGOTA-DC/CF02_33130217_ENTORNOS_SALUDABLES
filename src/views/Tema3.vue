<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-4
      .titulo-principal__numero
        span 3
      h1 Procesos de gestión

    .BGM01.pt-4.px-md-5.px-4.mb-4
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-2(data-aos="fade-right")
          img(src='@/assets/curso/tema3/img01.svg' alt="Imagen decorativa")
        .col(data-aos="fade-left")
          p.mb-0 La gestión de la salud pública es un conjunto de procesos que, bajo la dirección y liderazgo de la autoridad sanitaria, buscan que todos los actores del sistema de salud logren resultados en salud, en el siguiente video se apreciará el proceso de gestión:
      
      figure(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Orientaciones
    
    p.mb-5 Para el logro de la consolidación del #[strong PAIES] los territorios deben encaminar acciones en cada uno de los siguientes tópicos en los entornos priorizados y objeto a intervenir:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 1
            | Determinar el diagnóstico y caracterización de cada uno de los entornos.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 2
            | Conformación de redes sociales y comunitarias, garantizando en todo el proceso la participación social.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 3
            | Creación de estrategias de coordinación intersectorial.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 4
            | Promover el desarrollo de capacidades en el talento humano.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 5
            | Proponer acciones que promuevan el financiamiento y el aseguramiento de la población objeto del PAIES.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 6
            | Consecución de recursos para la gestión del PAIES.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 7
            | Fortalecer los conocimientos en salud de cada uno de los actores.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 8
            | Incluir acciones que garanticen una adecuada gestión de las acciones colectivas (PIC) y de las acciones individuales (PYP POS) en cada uno de los entornos.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 9
            | Fortalecer los procesos de planeación integral de salud mediante la aplicación de la estrategia PASE a la equidad.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 10
            | Incluir acciones que garanticen el proceso vigilancia en salud pública en cada entorno y fortalecer los procesos de capacitación en este aspecto.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 11
            | Definir claramente las acciones de inspección, vigilancia y control en cada entorno a intervenir, como también los responsables de su ejecución en el territorio.
          li 
            .lista-ol--cuadro__vineta(style="color: #12263F; font-weight: 900")
              span 12
            | Incluir acciones efectivas de información, educación y comunicación, así como de canalización.
      .col-lg-5.d-lg-flex.d-none(data-aos="fade-left")
        img(src='@/assets/curso/tema3/img02.svg' alt="Imagen decorativa")

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Alcance
    
    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img03.svg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        p Para determinar el alcance el #[strong PAIES] se crea un plan de gestión del alcance, el cual determina todos los:
        ul.lista-ul--color
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Programas.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Procesos.
          li
            i.fas.fa-check-circle(style="color: #59BEE2;")
            | Actividades requeridas para llevar a cabo su ejecución. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .bloque-texto-g.img-inv.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img04.jpg')})`}" alt="Imagen decorativa" data-aos="fade-left"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-right")
            p.mb-0 Adicional a lo que antecede, desde este plan del alcance se pueden generar listas de chequeo de actividades que ayuden a mantener dentro de los tiempos la ejecución de las acciones. <br><br>El plan de gestión del alcance se implementa para dar una estructura al PAIES mediante la documentación de todos los recursos necesarios para llegar a los objetivos del plan.

    p.mb-5 Este proceso de la creación del plan de gestión del alcance del PAIES evita varios conflictos comunes en la ejecución de proyectos, como son:

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-primario.BGR13.hg-01.p-4
          .row.mb-4
            .col-lg-4.col-md-6.col-4
              .bottomCircle
                figure
                  img(src='@/assets/curso/tema3/img05.svg' alt="Imagen decorativa")
          p.mb-0 Incumplir con los cronogramas y plazos determinados.
      .col-xl-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-primario.BGR13.hg-01.p-4
          .row.mb-4
            .col-lg-4.col-md-6.col-4
              .bottomCircle
                figure
                  img(src='@/assets/curso/tema3/img06.svg' alt="Imagen decorativa")
          p.mb-0 Ejecutar acciones que sean infructuosas y lleven a pérdidas de tiempo.
      .col-xl-4.col-md-6.col-10.mb-4(data-aos="fade-right")
        .tarjeta--boton.color-primario.BGR13.hg-01.p-4
          .row.mb-4
            .col-lg-4.col-md-6.col-4
              .bottomCircle
                figure
                  img(src='@/assets/curso/tema3/img07.svg' alt="Imagen decorativa")
          p.mb-0 Gastar más recursos económicos de los programados y hacer cambios constantes de requisitos.

    .BGM02.py-4.px-md-5.px-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 En este sentido, es necesario definir a qué se refiere el alcance del PAIES, y este no es más que la definición de los objetivos, los cronogramas y los productos a obtener con su ejecución en el corto, mediano y largo plazo. De esta manera se define claramente qué cosas se ejecutarán y que cosas no se ejecutarán contando con un cronograma en la traza de los tiempos. Lo antes descrito obliga a definir los actores de cada proceso y actividad.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema3/img08.png' alt="Imagen decorativa")
    
    p.mb-5 Para determinar el alcance de un proyecto se deben seguir los siguientes pasos:

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema3/img09.svg' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.text-small.mb-0(numero="1" titulo="Creación del documento") Crear un documento donde se define el alcance, el cual incluye procesos de participación ciudadana mediante reuniones y la opinión de expertos.
          p.text-small.mb-0(numero="2" titulo="Identificación de necesidades") Identificar cuáles son las necesidades a intervenir en cada entorno priorizado para el PAIES.
          p.text-small.mb-0(numero="3" titulo="Definición del alcance") Definir claramente el alcance, los productos a lograr, los indicadores de evaluación y seguimiento.
          p.text-small.mb-0(numero="4" titulo="Desglose de estrategias") Desglosar cada estrategia con sus metas y actividades de una manera clara, definiendo los enfoques, entornos de cada grupo a intervenir, así como los tiempos y responsables de la intervención.
          p.text-small.mb-0(numero="5" titulo="Aprobación") Someter lo consolidado a un proceso de aprobación por parte del consejo de política social en lo territorial y a través de procesos de participación ciudadana.
          p.text-small.mb-0(numero="6" titulo="Supervisión de cambios") Supervisar los cambios que se realicen al alcance del proyecto o requieran ajuste conforme a su avance e imprevistos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .BGR03.p-4(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-3.col-sm-3.col-lg-2.px-4
              img(src="@/assets/curso/temas/img01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Gestión de la Salud Pública
                  p.mb-0 En el siguiente documento, se puede consultar toda la información relacionada con las “Directrices para la caracterización y ejecución de los procesos para la Gestión de la Salud Pública en el contexto de la Política de Atención Integral en Salud”:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/directrices-gsp-v.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-link


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
