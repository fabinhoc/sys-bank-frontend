<template>
  <div class="deposit">
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="12" md="12" sm="12" xs="12">
          <v-card>
            <v-card-title>Depósitos</v-card-title>
            <v-card-text>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <DepositForm @restart="getData()" />
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                Depósitos
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <Deposits :data.sync="data" :loading="loading" />
              </v-col>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import DepositForm from "../components/DepositForm";
import Deposits from "../components/Deposits";
import axios from "axios";

export default {
  name: "Deposit",
  components: {
    DepositForm,
    Deposits,
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
      await axios.get("api/deposits").then((response) => {
        this.loading = false;
        this.data = response.data;
      });
    },
  },
};
</script>
