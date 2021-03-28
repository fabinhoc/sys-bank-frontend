<template>
  <v-app>
    <v-app-bar
      clipped-left
      app
      color="primary"
      dark
      v-if="$store.state.AUTH_TOKEN !== ''"
    >
      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-img
          alt="Sysbank Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo-white.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>

      <a icon href="https://github.com/fabinhoc/sys-bank" target="_blank" text>
        <v-icon>mdi-github</v-icon>
      </a>
      <v-btn icon to="/home" title="Sair">
        <v-icon>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      clipped
      app
      floating
      v-model="drawer"
      :mini-variant="mini"
      permanent
      v-if="$store.state.AUTH_TOKEN !== ''"
    >
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{ $store.state.AUTH_USER.name }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ $store.state.AUTH_USER.email }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link to="/home">
          <v-list-item-icon>
            <v-icon>mdi-currency-usd</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Meu Saldo</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/deposit">
          <v-list-item-icon>
            <v-icon>mdi-beaker-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Meus depósitos</v-list-item-title>
        </v-list-item>
        <v-list-item link to="/expense">
          <v-list-item-icon>
            <v-icon>mdi-beaker-minus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Minhas despesas</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <v-container fluid>
        <v-row class="fill-height">
          <v-col>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer padless app>
      <v-card
        flat
        tile
        style="width: 100%"
        class="grey lighten-2 text-center px-0"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            icon
            href="https://github.com/fabinhoc/sys-bank"
            target="blank"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    icons: ["mdi-github"],
    teste: process.env.VUE_APP_CLIENT_ID,
    currentRouter: "",
    drawer: true,
    mini: true,
  }),
  created() {
    this.loggedUser();
  },
  methods: {
    loggedUser() {
      this.currentRouter = window.location.pathname;
      if (this.currentRouter === "/login") {
        if (localStorage.getItem("token")) {
          this.$store.dispatch("SET_LOCAL_STORAGE_VALUES");
          this.$router.push("/home");
        }
      }
    },
  },
};
</script>

<style scoped>
.theme--light.v-application {
  background-color: #eee !important;
}
</style>
