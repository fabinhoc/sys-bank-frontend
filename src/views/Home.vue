<template>
  <div class="home">
    <v-container fluid>
      <v-card class="justify-center">
        <v-card-text class="text-center">
          <div>
            <v-icon class="text-center" size="109">mdi-account-circle</v-icon>
            <p class="font-weight-light text-upper text-uppercase">meu saldo</p>
            <h1><span class="green--text">R$12,89</span></h1>
          </div>
          <br />
          <v-divider />
        </v-card-text>
        <v-card-actions>
          <v-row>
            <v-col cols="12" lg="12" md="12" sm="12" xs="12">
              <p>
                <v-icon class="mt-n1">mdi-clock</v-icon>
                Histórico
              </p>
              <v-divider />
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <p>Despesas</p>
              <Expenses :data.sync="dataExpense" :loading="loadingExpense" />
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" xs="12">
              <p>Depósitos</p>
              <Deposits :data.sync="dataDeposit" :loading="loadingDeposit" />
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Expenses from "../components/Expenses";
import Deposits from "../components/Deposits";
import axios from "../plugins/axios";

export default {
  name: "Home",
  components: {
    Expenses,
    Deposits,
  },
  data: () => ({
    dataDeposit: [],
    loadingDeposit: false,
    dataExpense: [],
    loadingExpense: false,
  }),
  created() {
    this.getDataDeposits();
    this.getDataExpenses();
  },
  methods: {
    async getDataDeposits() {
      console.log(axios.defaults);
      this.loadingDeposit = true;
      await axios.get("api/expenses").then((response) => {
        this.loadingDeposit = false;
        this.dataDeposit = response.data;
      });
    },
    async getDataExpenses() {
      this.loadingExpense = true;
      await axios.get("api/expenses").then((response) => {
        this.loadingExpense = false;
        this.dataExpense = response.data;
      });
    },
  },
};
</script>
