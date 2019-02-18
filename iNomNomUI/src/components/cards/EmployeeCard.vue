<template>
  <v-card class="Elevation-21">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center mb-3>
          <v-avatar :tile="false" size="140" color="grey lighten-4">
            <v-img
              :src="genderAvatar"
              :lazy-src="`https://identicon-api.herokuapp.com/qwerty/180?format=png`"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </v-img>
          </v-avatar>
        </v-flex>
        <v-flex xs12 text-xs-center>
          <h4 class="headline">{{firstName}} {{lastName}}</h4>
          <h4 class="subheading">{{position}}</h4>
          <h4 class="body-1">{{level}}</h4>
          <v-btn color="primary" flat>View</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
// import AvatarGenerator from "../../modules/avatarGenerator.js";
export default {
  data() {
    return {
      // avatarGenerator: new AvatarGenerator()
    };
  },
  computed: {
    genderAvatar() {
      return `https://identicon-api.herokuapp.com/${this.firstName}${
        this.lastName
      }${this.gender}/180?format=png`;
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    level: {
      type: String,
      required: true
    },
    gender: {
      type: String
      // required: true
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>