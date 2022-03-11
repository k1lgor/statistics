<template>
  <div id="app">
    <HeaderComponent />
    <router-view> </router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss">
@import url("./assets/all.scss");
</style>
