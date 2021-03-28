<template>
  <div class="deposit">
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="12" md="12" sm="12" xs="12">
          <v-card>
            <v-card-text>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <DepositForm />
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                Depósitos
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <Deposits />
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

export default {
  name: "Deposit",
  components: {
    DepositForm,
    Deposits,
  },
  data: () => ({}),
};
</script>
