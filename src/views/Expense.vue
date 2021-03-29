<template>
  <div class="expense">
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="12" md="12" sm="12" xs="12">
          <v-card>
            <v-card-title>Despesas</v-card-title>
            <v-card-text>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <ExpenseForm @restart="getData()" />
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                Despesas
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <Expenses :data.sync="data" :loading="loading" />
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ExpenseForm from "../components/ExpenseForm";
import Expenses from "../components/Expenses";
import axios from "../plugins/axios";

export default {
  name: "Expense",
  components: {
    ExpenseForm,
    Expenses,
  },
  data: () => ({
    data: [],
    loading: false,
  }),
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      this.loading = true;
      await axios.get("api/expenses").then((response) => {
        this.loading = false;
        this.data = response.data;
      });
    },
  },
};
</script>
