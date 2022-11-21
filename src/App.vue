<script >
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }

}

</script>

<template>

  <AppHeader />
  <!-- / header -->

  <AppMain />
  <!-- / main -->

  <AppFooter />
  <!-- / footer -->
</template>

<style lang="scss" scoped>
@use './assets/sass/partials/palette' as *;
</style>
