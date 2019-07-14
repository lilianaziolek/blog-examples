<template>
  <v-card color="purple" elevation="5">
    I am a foo Y page, my params: [{{routeParams}}]
  </v-card>
</template>

<script>
  import LinksComponent from "~/components/LinksComponent";
  import {logRouteQueryAndParams} from '~/mixins/logRouteQueryAndParams.js';

  export default {
    name: "foo",
    components: {LinksComponent},
    props: [],
    mixins: [logRouteQueryAndParams],
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>

</style>
