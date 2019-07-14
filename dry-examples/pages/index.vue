<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <logo/>
        <vuetify-logo/>
        <links-component sample-prop="Prop from main page"></links-component>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'
  import LinksComponent from "~/components/LinksComponent";

  export default {
    components: {
      LinksComponent,
      Logo,
      VuetifyLogo
    }
  }
</script>
