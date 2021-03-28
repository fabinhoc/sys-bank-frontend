<template>
  <div class="expense">
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="12" md="12" sm="12" xs="12">
          <v-card>
            <v-card-text>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <ExpenseForm />
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                Despesas
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" lg="12" md="12" sm="12" xs="12">
                <Expenses />
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

export default {
  name: "Expense",
  components: {
    ExpenseForm,
    Expenses,
  },
  data: () => ({}),
};
</script>
