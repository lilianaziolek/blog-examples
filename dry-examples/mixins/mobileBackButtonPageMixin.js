//note: This mixin needs to be added to PAGE components (ONLY works with pages!)
export const mobileBackButtonPageMixin = {
  data() {
    return {
      dialogOpen: false
    }
  },
  mounted() {
    if (this.$device.isMobileOrTablet) {
      this.$eventBus.$on("dialogOpen", () => {
        this.dialogOpen = true;
      });
      this.$eventBus.$on("dialogClosed", () => {
        this.dialogOpen = false;
      });
    }
  },
  beforeDestroy() {
    if (this.$device.isMobileOrTablet) {
      this.$eventBus.$off('dialogOpen');
      this.$eventBus.$off('dialogClosed');
    }
  },
  beforeRouteUpdate(to, from, next) {
    if (this.$device.isMobileOrTablet && this.dialogOpen) {
      this.$eventBus.$emit('closeAllDialogs');
      next(false);
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.$device.isMobileOrTablet && this.dialogOpen) {
      this.$eventBus.$emit('closeAllDialogs');
      next(false);
    } else {
      next();
    }

  }

};
