<template>
  <v-layout row>
    Hello, popups!
    <popup></popup>
  </v-layout>

</template>

<script>
    import {mobileBackButtonPageMixin} from "@/mixins/mobileBackButtonPageMixin.js";
    import Popup from "../components/popup";

    export default {
        name: "PageWithPopup",
        components: {Popup},
        mixins: [mobileBackButtonPageMixin]
    }
</script>
