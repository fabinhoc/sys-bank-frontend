<template>
  <div class="depositForm">
    <v-form ref="depositForm" @submit="save">
      <v-row ref="depositForm">
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
    validForm: true,
    loading: false,
    disabled: false,
  }),
  methods: {
    async save(e) {
      e.preventDefault();
      if (this.$refs.depositForm.validate()) {
        this.disabled = true;
        this.loading = true;
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + this.$store.state.AUTH_TOKEN;

        const data = {
          name: this.deposit.name,
          price: this.formattFloatNumber(this.deposit.price),
          user_id: this.$store.state.AUTH_USER.id,
        };

        await axios
          .post("api/deposits", data)
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
      this.$refs.depositForm.reset();
      this.deposit = {
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
