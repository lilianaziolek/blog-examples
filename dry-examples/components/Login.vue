<template>
  <v-btn @click="fetchUserData">Login (switch Admin/non-Admin)</v-btn>
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: "Login",
    components: {},
    props: [],
    data() {
      return {}
    },
    computed: {
      ...mapState({
        x: state => state.module.x
      })
    },
    methods: {
      fetchUserData() {
        this.$store.dispatch('user/fetchUserDetails');
      }
    }
  }
</script>

<style scoped>

</style>
