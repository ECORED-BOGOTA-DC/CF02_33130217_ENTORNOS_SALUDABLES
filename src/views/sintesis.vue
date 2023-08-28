<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-5 Las estrategias de entornos saludables buscan principalmente ejecutar acciones de carácter preventivo, promocional y participativo, con el fin de salvaguardar la salud de las personas, que permita aumentar cada vez más la oportunidad de desarrollo de estas, esto cobijando todos los entornos como son, viviendas, localidades, sitios de trabajo, lugares de esparcimiento, sitios de estudio, entre otros, acorde a la población sujeto y sus necesidades. Por esta razón este componente formativo abordo los temas necesarios para cumplir este objetivo, los cuales se resumen a través del siguiente mapa:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra mapa mental con síntesis de estrategias de entornos saludables buscan principalmente: <br>1. descripción de entornos (institucional, hogar, comunitario, educativo y laboral) <br>2. Escenarios<br>3. Gestión territorial de entornos<br>4. Procesos de gestión<br>5. Plan de gestión")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
