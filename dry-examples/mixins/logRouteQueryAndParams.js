export const logRouteQueryAndParams = {
  asyncData(context) {
    console.log("(Mixin) " + context.route.path + "AsyncData: " + JSON.stringify(context.route.params));
  },
  fetch(context) {
    console.log("(Mixin) " + context.route.path + "Fetch: " + JSON.stringify(context.route.params));
  },
  computed: {
    routeParams() {
      return this.$route.params;
    }
  }
};
