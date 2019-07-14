<template>
  <v-card color="blue" elevation="2">
    I am a foo X page, my params: [{{routeParams}}]
  </v-card>
</template>

<script>
  import LinksComponent from "~/components/LinksComponent";
  import {logRouteQueryAndParams} from '~/mixins/logRouteQueryAndParams.js';

  export default {
    name: "fooX",
    components: {LinksComponent},
    mixins: [logRouteQueryAndParams]
  }
</script>

<style scoped>

</style>
