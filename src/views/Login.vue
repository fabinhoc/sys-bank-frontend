<template>
  <div class="login">
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-4">
          <v-card-text>
            <v-img src="../assets/logo-purple.png" width="50" class="mx-auto" />
            <p class="text-center">SYSBANK</p>
            <v-divider></v-divider>
            <v-form
              @submit="login"
              class="mt-5"
              ref="form"
              v-model="validForm"
              lazy-validation
            >
              <p v-if="error" class="red--text text-center">
                Email ou Senha inválidos!
              </p>
              <v-text-field
                prepend-icon="mdi-account"
                name="login"
                label="Login"
                type="email"
                :rules="rulesEmail"
                v-model="email"
                @input="error = false"
              ></v-text-field>
              <v-text-field
                id="password"
                prepend-icon="mdi-lock"
                name="password"
                label="Password"
                type="password"
                :rules="rulesPassword"
                v-model="password"
                @input="error = false"
              ></v-text-field>
              <v-btn
                class="primary mt-3"
                type="submit"
                :disabled="disabled && validForm"
                :loading="disabled"
                block
                small
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  components: {},
  data: () => ({
    validForm: true,
    email: "",
    password: "",
    error: false,
    disabled: false,
    rulesPassword: [(value) => !!value || "Este campo é obrigatório."],
    rulesEmail: [
      (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Email inválido.";
      },
      (value) => !!value || "Required",
    ],
  }),
  methods: {
    async login(e) {
      e.preventDefault();
      if (this.$refs.form.validate()) {
        this.disabled = true;
        await axios
          .post("oauth/token", {
            grant_type: "password",
            client_id: process.env.VUE_APP_CLIENT_ID,
            client_secret: process.env.VUE_APP_CLIENT_SECRET,
            username: this.email,
            password: this.password,
            scope: "",
          })
          .then((response) => {
            this.getUser(response.data.access_token);
          })
          .catch((err) => {
            console.log(err);
            this.disabled = false;
            this.error = true;
          });
      }
    },
    async getUser(token) {
      // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      await axios
        .get("api/user", {
          headers: {
            Authorization: "Bearer " + token,
          },
        })
        .then((response) => {
          this.disabled = false;
          this.$store.dispatch("SET_AUTH_USER", response.data);
          this.$store.dispatch("SET_AUTH_TOKEN", token);
          this.$parent.currentRouter = "/home";
          this.$router.push("/home");
        })
        .catch((err) => {
          this.disabled = false;
          this.error = true;
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 90vh;
}
</style>
