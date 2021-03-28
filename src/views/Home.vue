<template>
  <div class="home">
    <v-container fluid>
      <v-card class="justify-center">
        <v-card-text class="text-center">
          <div>
            <v-icon class="text-center" size="209">mdi-account-circle</v-icon>
            <p class="font-weight-light text-upper text-uppercase">meu saldo</p>
            <h1><span class="green--text">R$12,89</span></h1>
          </div>
          <br />
          <v-divider />
        </v-card-text>
        <v-card-actions>
          <p>
            <v-icon class="mt-n1">mdi-clock</v-icon>
            Histórico
          </p>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
