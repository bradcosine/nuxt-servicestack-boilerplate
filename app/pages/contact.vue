<template>
  <section class="container">
    <div>
      <h1 class="title">Contact</h1>
      <h2 class="subtitle">ServiceStack Links</h2>
      <ul>
        <li v-for="(url, name) in links" :key="name">
          <a :href="url">{{name}}</a>
        </li>
        <button @click="login">LOGIN</button>
      </ul>

      <!-- <h2 class="subtitle">ServiceStack asyncData axios GetLinks</h2>
      <ul>
        <li v-for="(url, name) in lks" :key="name">
          <a :href="url">{{name}}</a>
        </li>
      </ul> -->
    </div>
  </section>
</template>

<script>
import { mapGetters, store } from 'vuex';

export default {
  // computed: mapGetters([
  //   'isAuthenticated'
  // ]),
  asyncData ({app}) {
    //return { name: '', result: ''}
    //console.log(app.$axios);
    return app.$axios.$get('json/reply/GetLinksRequest')
    .then((res) => {
      //console.log(res);
      return { links: res.results }
    });
  },
  mounted() {
    //initially render with Vuex state then refresh with latest data from server
    //this.$store.dispatch('getLinks') //comment line to view stale data
  },
  methods: {
    async login({store}) {
      await store.dispatch('login',{});
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