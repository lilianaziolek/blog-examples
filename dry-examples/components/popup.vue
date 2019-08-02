<template>
  <div>
    <v-btn @click="popupVisible = true">Click me for Popup</v-btn>

    <v-dialog persistent hide-overlay height="200px" width="500px" v-model="popupVisible"
              :fullscreen="$vuetify.breakpoint.smAndDown">
      <v-layout column>
        <v-card>
          <v-card-title>Surprise! Hello from Gizmo!</v-card-title>
          <v-img contain src="/gizmo/sunset.jpg"></v-img>
        </v-card>
        <v-btn @click="popupVisible = false">Awwww! Bye Gizmo!</v-btn>
      </v-layout>
    </v-dialog>
  </div>
</template>

<script>
    import {mobileBackButtonDialogComponentMixin} from "@/mixins/mobileBackButtonDialogComponentMixin";

    export default {
        name: "popup",
        mixins: [mobileBackButtonDialogComponentMixin],
        data() {
            return {
                popupVisible: false
            }
        },

        watch: {
            popupVisible: 'notifyDialogStateViaEventBus'
        },
        methods: {
            closeAllDialogs() {
                this.popupVisible = false;
            }
        },

        beforeRouteUpdate(to, from, next) {
            console.log("This will never be printed - beforeRouteUpdate and beforeRouteLeave are only called in pages")
        },
        beforeRouteLeave(to, from, next) {
            console.log("This will never be printed - beforeRouteUpdate and beforeRouteLeave are only called in pages")
        }

    }
</script>

<style scoped>

</style>
