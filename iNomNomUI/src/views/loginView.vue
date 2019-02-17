<template>
  <v-container fluid fill-height>
    <v-layout row wrap align-center justify-center>
      <v-flex xs6 offset-xs2>
        <h1 class="display-4">iNom
          <br>Nom
        </h1>
        <br>
        <p class="caption">/ insert awesome graphic here /</p>
        <br>
        <h3 class="display-1">The nomest nom on the interwebs</h3>
        <br>
        <p>To demonstrate
          <br>CRUD oprations
          <br>API integration
          <br>And a dash of
          <br>Microservices
        </p>
      </v-flex>
      <v-flex xs3>
        <v-form>
          <v-container fluid>
            <v-layout text-xs-left column fill-height>
              <v-flex>
                <v-text-field
                  label="Username"
                  required
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                  v-model="email"
                  :error-messages="emailErrors"
                ></v-text-field>
              </v-flex>
              <v-flex>
                <v-text-field
                  label="Password"
                  required
                  type="password"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                  v-model="password"
                  :error-messages="passwordErrors"
                ></v-text-field>
              </v-flex>
              <v-flex class="text-xs-center" pt-5>
                <v-btn @click="submit" color="primary" large dark>submit</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
      <v-flex xs1></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    email: { required, email },
    password: { required }
  },
  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
  },
  data() {
    return {
      email: "",
      password: "",
      // email: "pravin.gordhan",
      // password: "pravin.gordhan",
      valid: false
    };
  },
  methods: {
    async submit() {
      debugger;
      var dto = {
        username: this.email,
        password: this.password
      };

      var response = await this.$APIConnector.AuthService.Login(dto);
      debugger;
      localStorage.setItem("token", response.data.JWT);
      localStorage.setItem("username", this.email);
      localStorage.setItem("isLoggedIn", true);

      console.log(response);
      this.$router.push("/employeedirectory");
    }
  }
};
</script>

<style scoped>
</style>