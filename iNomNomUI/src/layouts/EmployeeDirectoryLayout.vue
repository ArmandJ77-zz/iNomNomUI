<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <employees-list></employees-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EmployeesList from "../components/lists/EmployeesList";
export default {
  components: {
    EmployeesList: EmployeesList
  }
};
</script>

<style scoped>
</style>