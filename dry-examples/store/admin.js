export const state = () => ({
  adminData: {}
});

export const mutations = {
  setAdminData(state, value) {
    state.adminData = value
  }
};
export const actions = {
  async fetchAdminData({commit}) {
    // normally we'd have an axios call here, it would call our API to get some data specific to admin.
    // here we're just setting something random
    commit("setAdminData", {someValue: Math.random()});
  },
  async removeAdminData({commit}) {
    // if a user logs out, or stops being an admin, we want to remove existing adminData
    commit("setAdminData", {});
  }
};
