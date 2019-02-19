<template>
  <v-container v-if="show" fill-height fluid>
    <v-layout row wrap justify-center align-center text-xs-center>
      <v-flex xs12>
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
</style>