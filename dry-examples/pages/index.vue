<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <links-component sample-prop="Prop from main page"></links-component>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
    import LinksComponent from "~/components/LinksComponent";

    export default {
    components: {
      LinksComponent,
    }
  }
</script>
