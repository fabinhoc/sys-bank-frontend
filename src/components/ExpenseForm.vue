<template>
  <div class="expenseForm">
    <v-form ref="expenseForm" @submit="save">
      <v-row>
        <v-col>
          <v-text-field
            v-model="expense.name"
            label="Nome identificador"
            id="name"
            name="name"
            dense
            :rules="ruleName"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="expense.price"
            label="Valor"
            id="price"
            name="price"
            dense
            v-currency="currencyConfig"
            :rules="rulePrice"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            type="submit"
            color="primary"
            class="mr-2"
            :loading="loading"
            :disabled="validForm && disabled"
            small
          >
            Salvar
          </v-btn>
          <v-btn color="default" small>Limpar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExpenseForm",
  components: {},
  data: () => ({
    expense: {
      name: "",
      price: 0,
    },
    ruleName: [(value) => !!value || "Este campo é obrigatório."],
    rulePrice: [(value) => !!value || "Este campo é obrigatório."],
    currencyConfig: {
      currency: null,
      locale: "es-ES",
      autoDecimalMode: true,
      distractionFree: false,
      valueRange: { max: 99999999 },
    },
    validForm: true,
    loading: false,
    disabled: false,
  }),
  methods: {
    async save(e) {
      e.preventDefault();
      if (this.$refs.expenseForm.validate()) {
        this.disabled = true;
        this.loading = true;
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + this.$store.state.AUTH_TOKEN;

        const data = {
          name: this.expense.name,
          price: this.formattFloatNumber(this.expense.price),
          user_id: this.$store.state.AUTH_USER.id,
        };

        await axios
          .post("api/expenses", data)
          .then(() => {
            this.disabled = false;
            this.$emit("restart");
            this.clearForm();
            this.loading = false;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    clearForm() {
      this.$refs.expenseForm.reset();
      this.expense = {
        name: "",
        price: 0,
      };
    },
    formattFloatNumber(number) {
      if (typeof number === "string") {
        if (number.includes(".")) {
          number = number.replace(/.([^.]*)$/, ",$1");
          number = number.replaceAll(".", "");
        }

        if (number.includes(",")) {
          number = number.replaceAll(",", ".");
        }

        return parseFloat(number);
      } else {
        return number;
      }
    },
  },
};
</script>
