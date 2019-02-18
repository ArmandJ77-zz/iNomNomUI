<template>
  <v-app id="inspire" dark>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  }
};
</script>

<style lang="stylus">
.toasted-custom_error {
  color: #FFFFFF !important;
  font-family: Roboto !important;
}
</style>