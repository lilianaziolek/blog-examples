<template>
  <div>
    I am a test3 page, my params: [{{routeParams}}]
    <links-component sample-prop="Test1"></links-component>
  </div>
</template>

<script>
  import LinksComponent from "~/components/LinksComponent";
  import {logRouteQueryAndParams} from '~/mixins/logRouteQueryAndParams.js';

  export default {
    name: "test1",
    components: {LinksComponent},
    mixins: [logRouteQueryAndParams]
  }
</script>

<style scoped>

</style>
