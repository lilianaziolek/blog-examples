<template>
  <div>
    I am a test2 page, my params: [{{routeParams}}]
    <links-component sample-prop="Test2"></links-component>
  </div>
</template>

<script>
  import LinksComponent from "~/components/LinksComponent";
  import {logRouteQueryAndParams} from '~/mixins/logRouteQueryAndParams.js';

  export default {
    name: "test2",
    components: {LinksComponent},
    mixins: [logRouteQueryAndParams]
  }
</script>

<style scoped>

</style>
