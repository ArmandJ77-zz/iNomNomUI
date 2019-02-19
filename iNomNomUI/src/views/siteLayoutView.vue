<template>
  <div>
    <v-navigation-drawer v-model="drawer" clipped fixed app>
      <v-list dense>
        <!-- <v-list-tile to="/dashboard">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>-->
        <v-list-tile to="employeedirectory">
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Employee Directory</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="lunchmenu">
          <v-list-tile-action>
            <v-icon>fastfood</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Lunch Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon>lock</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>iNomNom</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="success" flat v-on:click="navigateUser">{{userName}}</v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout>
          <v-flex>
            <router-view></router-view>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return localStorage.getItem("username");
    }
  },
  data: () => ({
    drawer: null,
    username: ""
  }),
  props: {
    source: String
  },
  methods: {
    logout() {
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("token", null);
      localStorage.setItem("username", null);

      this.$router.push("/");
    },
    navigateUser() {
      this.$router.push("UserDetailLayout");
    }
  }
};
</script>

<style scoped>
</style>