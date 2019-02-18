<template>
  <v-container fluid grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field label="Search" solo v-model="search"></v-text-field>
      </v-flex>
      <v-flex xs3 v-for="item in users" :key="item.user.id">
        <employee-card
          :id="item.user.id"
          :firstName="item.user.first_name"
          :lastName="item.user.last_name"
          :gender="item.gender"
          :position="(item.position != null) ? item.position.name : 'No Position found'"
          :level="(item.position != null) ? item.position.level : 'No found level'"
        ></employee-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EmployeeCard from "../cards/EmployeeCard";
export default {
  components: {
    EmployeeCard: EmployeeCard
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
    GetEmployeeData() {
      this.users = [
        {
          user: {
            id: 8,
            username: "captain",
            email: "captain@gmail.com",
            first_name: "Captain",
            last_name: "America",
            is_active: true,
            is_staff: true
          },
          position: {
            id: 1,
            name: "Front-end Developer",
            level: "Senior",
            sort: 0
          },
          phone_number: "0824478876",
          email: "captain@gmail.com",
          github_user: "Captain",
          birth_date: "1981-07-30",
          gender: "F",
          race: "B",
          years_worked: 3,
          age: 37,
          days_to_birthday: 299
        },
        {
          user: {
            id: 53,
            username: "dummy1",
            email: "dum@one.co.za",
            first_name: "Dummy",
            last_name: "One",
            is_active: true,
            is_staff: true
          },
          position: null,
          phone_number: null,
          email: "dum@one.co.za",
          github_user: null,
          birth_date: "2018-10-04",
          gender: null,
          race: null,
          years_worked: 0,
          age: 0,
          days_to_birthday: 0
        },
        {
          user: {
            id: 11,
            username: "employee4",
            email: "gary.player@gmail.com",
            first_name: "Gary",
            last_name: "Player",
            is_active: true,
            is_staff: true
          },
          position: {
            id: 2,
            name: "Back-end Developer",
            level: "Junior",
            sort: 0
          },
          phone_number: "0837788876",
          email: "gary.player@gmail.com",
          github_user: "Gary",
          birth_date: "1990-08-09",
          gender: "M",
          race: "W",
          years_worked: 1,
          age: 28,
          days_to_birthday: 309
        },
        {
          user: {
            id: 5,
            username: "admin",
            email: "ian@tangentsolutions.co.za",
            first_name: "Ian",
            last_name: "Roberts",
            is_active: true,
            is_staff: true
          },
          position: {
            id: 1,
            name: "Front-end Developer",
            level: "Senior",
            sort: 0
          },
          phone_number: "0875677663",
          email: "ian@tangentsolutions.co.za",
          github_user: "TangentSolutions",
          birth_date: "1983-12-23",
          gender: "M",
          race: "W",
          years_worked: 8,
          age: 34,
          days_to_birthday: 80
        }
      ];
    },
    searchList(input) {
      var data = [];
      this.users.find(function(element) {
        var fullname = `${element.user.first_name} ${element.user.last_name}`;
        if (fullname.toLowerCase().includes(input.toLowerCase())) {
          data.push(element);
        }
      });

      this.users = data;
    }
  }
};
</script>

<style scoped>
</style>