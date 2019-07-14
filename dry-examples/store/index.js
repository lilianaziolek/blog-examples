export const strict = false;

export const state = () => ({});

export const actions = {
  async nuxtServerInit({dispatch}, context) {
    console.log("(NuxtServerInit) SSR: " + process.server);
    //This is a good place for global data fetches (data used on all pages and stored in VueX)
    //You also have access to Nuxt context, as defined here: https://nuxtjs.org/api/context/
  }
};
