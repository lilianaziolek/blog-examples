export const mobileBackButtonDialogComponentMixin = {
  /*
  in component import the mixin
  import {mobileBackButtonDialogComponentMixin} from "@/mixins/mobileBackButtonDialogComponentMixin";
  mixins: [mobileBackButtonDialogComponentMixin],

  then add the following (you can add multiple dialog props)
  replace "myDialogProp" with the name of data property that is used in v-model of v-dialog

  watch: {
      myDialogProp: 'notifyDialogStateViaEventBus'
  },
  methods: {
      closeAllDialogs(){
          this.myDialogProp = false;
      }
  }
  */
  methods: {
    notifyDialogStateViaEventBus(open) {
      if (open) {
        this.$eventBus.$emit('dialogOpen');
        this.$eventBus.$on("closeAllDialogs", () => {
          this.closeAllDialogs();
        });
      } else {
        this.$eventBus.$emit('dialogClosed');
        this.$eventBus.$off("closeAllDialogs");
      }
    }
  },
};
