<template>
  <div class="depositForm">
    <v-form ref="depositForm">
      <v-row>
        <v-col>
          <v-text-field
            v-model="deposit.name"
            label="Nome identificador"
            id="name"
            name="name"
            dense
            :rules="ruleName"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="deposit.price"
            label="Valor"
            id="price"
            name="price"
            dense
            :rules="rulePrice"
            v-currency="currencyConfig"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn color="primary" class="mr-2" small>Salvar</v-btn>
          <v-btn color="default" small>Limpar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "DepositForm",
  data: () => ({
    deposit: {
      name: "",
      price: 0,
    },
    ruleName: [(value) => !!value || "Este campo é obrigatório."],
    rulePrice: [],
    currencyConfig: {
      currency: null,
      locale: "es-ES",
      autoDecimalMode: true,
      distractionFree: false,
      valueRange: { max: 99999999 },
    },
  }),
  methods: {
    save() {
      if (this.$refs.expenseForm.validate()) {
        console.log("save here");
      }
    },
    clearForm() {
      this.$refs.expenseForm.reset();
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
