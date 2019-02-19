<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12>
        <progress-bar-circular :show="isLoading"></progress-bar-circular>
      </v-flex>
      <v-flex xs5>
        <h5 class="subheading">
          <v-text-field v-model="data.FirstName" label="First name" disabled="true"></v-text-field>
        </h5>
      </v-flex>
      <v-flex xs5 offset-xs1>
        <h5 class="subheading">
          <v-text-field v-model="data.LastName" label="First name" disabled="true"></v-text-field>
        </h5>
      </v-flex>
      <v-flex xs5>
        <h5 class="subheading">
          <v-text-field v-model="data.IsValid" label="Is Valid" disabled="true"></v-text-field>
        </h5>
      </v-flex>
      <v-flex xs5 offset-xs1>
        <h5 class="subheading">
          <v-text-field v-model="data.IsActive" label="Is Active" disabled="true"></v-text-field>
        </h5>
      </v-flex>
      <v-flex xs5>
        <h5 class="subheading">
          <v-text-field v-model="data.IsStaff" label="Is Staff" disabled="true"></v-text-field>
        </h5>
      </v-flex>
      <v-flex xs5 offset-xs1>
        <h5 class="subheading">
          <v-text-field v-model="data.Email" label="Email" disabled="true"></v-text-field>
        </h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import progressBarCircular from "../components/progressBar/progressBarCircular";
export default {
  components: {
    progressBarCircular: progressBarCircular
  },
  data() {
    return {
      isLoading: false,
      data: null
    };
  },
  mounted() {
    this.GetApiData();
  },
  methods: {
    async GetApiData() {
      this.isLoading = true;

      var response = await this.$APIConnector.UserService.Get();

      if (response.statusCode == 200) {
        this.data = response.data;
        debugger;
        this.isLoading = false;
        return;
      }

      this.$toasted.error("Could not retrieve user data");
      this.isLoading = false;
    }
  }
};
</script>

<style scoped>
</style>