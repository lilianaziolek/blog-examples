<template>
  <div>
    <login></login>
    <admin-data-demo></admin-data-demo>
  </div>
</template>

<script>
  import Login from "../components/Login";
  import AdminDataDemo from "../components/AdminDataDemo";

  export default {
    name: "eventBusDemo",
    components: {AdminDataDemo, Login},
  }
</script>
