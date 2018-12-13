<template>
  <section class="container">
<div>
    <v-alert show variant="warning">This is a secure page!</v-alert>
    <v-layout row>
      <v-flex xs12>
        <v-card title="State">
          <pre>{{ state }}</pre>
        </v-card>
      </v-flex>
    </v-layout>
    <hr>
    <div>
      <v-btn @click="$auth.fetchUser()">Fetch User</v-btn>
      <v-btn @click="logout()">Logout</v-btn>
    </div>
  </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  middleware: ['auth'],
  computed: {
      state() {
          return JSON.stringify(this.$auth.$state,undefined,2);
      }
  },
  
  asyncData (context) {
    return { name: '', result: ''}
  },
  //middleware: 'auth',
  mounted() {
    //initially render with Vuex state then refresh with latest data from server
    this.$store.dispatch('getSecured') //comment line to view stale data
  },
  methods: {
    async login() {
      await this.$store.dispatch('login',{});
    },
    async logout() {
      await this.$store.dispatch('logout',{});
    }
  }
}

</script>
<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.result {
  padding-top: 15px;
  height: 30px;
  line-height: 30px;
  font-size: 24px;
}
</style>