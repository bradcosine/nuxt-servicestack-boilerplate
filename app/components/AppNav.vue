<template>
<div>
  <v-navigation-drawer app clipped>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>folder_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>First thing</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
 <v-toolbar app fixed clipped-left>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <router-link to="/">
      <v-toolbar-title>App</v-toolbar-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <!-- <v-btn flat>Link One</v-btn> -->

      <v-btn flat v-if="isAuthenticated" to="/secure">Secure Area</v-btn>
      <v-btn flat v-if="isAuthenticated">{{ loggedInUser.email }}</v-btn>
      <v-btn v-if="!isAuthenticated" flat to="/login">Login</v-btn>
      <v-btn v-if="isAuthenticated" flat @click="logout()">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</div>
</template>


<script>
import { mapGetters } from 'vuex'

export default {
 computed: mapGetters([
    'loggedInUser', 'isAuthenticated'
  ]),
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
    }
  }
}
</script>