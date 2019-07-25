export const state = () => ({
  userDetails: {
    admin: false
  },
});

export const mutations = {
  reverseUserDetails(state) {
    state.userDetails = {admin: !state.userDetails.admin};
  }
};
export const actions = {
  async fetchUserDetails({commit}) {
    // normally we'd have an axios call here, it would call our API to get user details
    // here I'm just hardcoding the userDetails to values opposite to what they were
    // every time when you "Login" and fetchUserDetails is called you will switch between admin and non-admin
    commit("reverseUserDetails");

    console.log("Emitting event that user details changed");
    this.$eventBus.$emit("userDetailsChanged");
  }
};
