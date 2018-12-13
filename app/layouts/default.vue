<template>
  <v-app>
    <AppNav/>
    <v-content>
    <v-container fluid>
    <nuxt/>
    </v-container>
    </v-content>
  </v-app>
</template>
<script>
import AppNav from '~/components/AppNav';
export default {
  data() {
    return {
      drawer: false
    }
  },
  components: {
    AppNav,
  },
};
</script>
<style>
</style>
