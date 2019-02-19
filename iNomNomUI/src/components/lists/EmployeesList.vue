<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field label="Search" solo v-model="search"></v-text-field>
      </v-flex>
      <v-flex xs12>
        <progress-bar-circular :show="toggleLoader"></progress-bar-circular>
      </v-flex>
      <v-flex xs3 v-for="item in users" :key="item.User.Id">
        <employee-card
          :id="item.User.Id"
          :firstName="item.User.FirstName"
          :lastName="item.User.LastName"
          :gender="item.Gender"
          :position="(item.Position != null) ? item.Position.Name : 'No Position found'"
          :level="(item.Position != null) ? item.Position.Level : 'No found level'"
        ></employee-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EmployeeCard from "../cards/EmployeeCard";
import progressBarCircular from "../progressBar/progressBarCircular";

export default {
  components: {
    EmployeeCard: EmployeeCard,
    progressBarCircular: progressBarCircular
  },
  watch: {
    search(newValue, oldValue) {
      if (newValue.length > 3) {
        this.searchList(newValue);
        this.searched = true;
      }

      if (newValue.length == 0) {
        this.searched = false;
        this.GetEmployeeData();
      }
    }
  },
  data() {
    return {
      toggleLoader: true,
      searched: false,
      search: "",
      users: null
    };
  },
  mounted() {
    this.searched = false;
    this.GetEmployeeData();
  },
  methods: {
    async GetEmployeeData() {
      this.toggleLoader = true;

      var response = await this.$APIConnector.EmployeeService.GetList();
      debugger;

      if (response.statusCode === 200) {
        this.users = response.data;

        this.toggleLoader = false;
        return;
      }

      this.$toasted.error("Could not retrieve employee data");
    },
    searchList(input) {
      this.toggleLoader = true;
      var data = [];
      this.users.find(function(element) {
        var fullname = `${element.User.FirstName}${element.User.LastName}`;
        if (fullname.toLowerCase().includes(input.toLowerCase())) {
          data.push(element);
        }
      });

      this.users = data;
      this.toggleLoader = false;
    }
  }
};
</script>

<style scoped>
</style>