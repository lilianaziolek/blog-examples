<template>
  <v-card elevation="1">
    I am a foo page, my params: [{{routeParams}}]
    <router-view></router-view>
    <links-component sample-prop="SampleProp from Foo"></links-component>
  </v-card>
</template>

<script>
  import LinksComponent from "~/components/LinksComponent";
  import {logRouteQueryAndParams} from '~/mixins/logRouteQueryAndParams.js';

  export default {
    name: "foo",
    components: {LinksComponent},
    mixins: [logRouteQueryAndParams]
  }
</script>

<style scoped>

</style>
