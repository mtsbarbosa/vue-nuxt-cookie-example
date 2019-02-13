<template>
  <section class="container">
    <!--<component v-bind:is="page" ></component>-->
    <router-view class="view"></router-view>
  </section>
</template>

<script>

export default {
  data() {
    return {
      page: "login"
    }
  },
  components: {
  },
  methods : {
    changePage: function(pageName) {
      this.page = pageName;
    }
  }
}
</script>

<style>

</style>
