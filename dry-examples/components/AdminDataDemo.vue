<template>
  <div>
    <span v-if="isAdmin">{{adminData.someValue}}</span>
    <span v-else>Current user is not admin</span>

  </div>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "AdminDataDemo",
    computed: {
      ...mapState({
        isAdmin: state => state.user.userDetails.admin,
        adminData: state => state.admin.adminData
      })
    },
    created() {
      //this listener is not needed in SSR-mode
      if (process.client) {
        console.log("Subscribing to know when userDetails change");
        this.$eventBus.$on("userDetailsChanged", () => {
          console.log("We were notified that user details changed, reacting, admin: " + this.isAdmin);
          if (this.isAdmin) {
            this.$store.dispatch('admin/fetchAdminData')
          } else {
            this.$store.dispatch('admin/removeAdminData')
          }
        });
      }
    },
    beforeDestroy() {
      //make sure to always unsubscribe from events when no longer needed
      console.log("Switching off userDetails listener");
      this.$eventBus.$off("userDetailsChanged");
    }
  }
</script>
