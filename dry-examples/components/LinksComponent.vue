<template>
  <v-card>
    <v-card-text v-for="link in links" :key="link.url" class="pa-0">
      <n-link :ref="link.description" :to="link.url">{{link.description}}</n-link>
    </v-card-text>
  </v-card>
</template>

<script>
  import {logRouteQueryAndParams} from '~/mixins/logRouteQueryAndParams.js';

  export default {
    name: "LinksComponent",
    props: ['sampleProp'],
    mixins: [logRouteQueryAndParams],

    asyncData(context) {
      console.log("(LinksComponent) AsyncData in Components is never called");
    },
    fetch(context) {
      console.log("(LinksComponent) Fetch in Components is never called");
    },

    data() {
      return {
        sampleData: 'Lorem Ipsum Data',
        links: [
          {url: '/eventBusDemo', description: 'Event Bus Demo'},

          {url: '/foo', description: 'Foo With No Params'},
          {url: '/foo/x/val1', description: 'Foo X With Param1'},
          {url: '/foo/x/val2', description: 'Foo X With Param2'},
          {url: '/foo/y/val1', description: 'Foo Y With Param1'},
          {url: '/foo/y/val2', description: 'Foo Y With Param2'},

          {url: '/test1', description: 'Test1 With No Params'},
          {url: '/test1/val1', description: 'Test1 With Param1'},
          {url: '/test1/val1/val2', description: 'Test1 With Param1/Param2'},

          {url: '/test2', description: 'Test2 With No Params'},
          {url: '/test2/val1', description: 'Test2 With Param1'},
          {url: '/test2/val1/val2', description: 'Test2 With Param1/Param2'},
        ]
      }
    },
    beforeCreate() {
      console.log("(LinksComponent) SSR: " + process.server + " [BeforeCreate]");
      //if you tried to use this.sampleProp or this.sampleData, like in created or mounted, you'll get error indicating that this is undefined.
    },
    created() {
      console.log("(LinksComponent) SSR: " + process.server + " [Created] SampleProp: " + this.sampleProp + ", SampleData: " + this.sampleData);
      console.log("(LinksComponent) Created Refs: " + Object.keys(this.$refs));
    },
    mounted() {
      console.log("(LinksComponent) SSR: " + process.server + " [Mounted] SampleProp: " + this.sampleProp + ", SampleData: " + this.sampleData);
      console.log("(LinksComponent) Mounted Refs: " + Object.keys(this.$refs));
    }
  }
</script>

<style scoped>

</style>
