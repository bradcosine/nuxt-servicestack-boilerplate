<template>
  <section class="container">
    <div>
      <h1 class="title"><a @click="login">Login</a></h1>
    </div>
  </section>
</template>

<script>
import { mapGetters, store } from 'vuex';

export default {
  // computed: mapGetters([
  //   'isAuthenticated'
  // ]),
  asyncData ({app, query}) {
    // if (process.server) {
    //   console.log(query);
    //   var headers = {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   }
    //   if (query.code && query.state) {
    //     //app.store.dispatch('getAuthToken',{code: query.code, state: query.state});
    //     app.$axios.$post('/auth/token', {code: query.code, state: query.state, redirectUri: 'http://localhost:3000'}, headers)
    //       .then((res) => {
    //         console.log("res from api::::");
    //         console.log(res);
    //       });
    //   }
    // }
    //return { name: '', result: ''}
    //return app.$axios.$get('json/reply/GetLinksRequest')
    // .then((res) => {
    //   console.log(res);
    //   return { links: res.results }
    // });
  },
  mounted() {
    //initially render with Vuex state then refresh with latest data from server
    //this.$store.dispatch('getLinks') //comment line to view stale data
  },
  methods: {
    async login() {
      await this.$store.dispatch('login',{});
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