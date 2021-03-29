<template>
  <div class="expenses">
    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-1"
      :loading="loading"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    loading: Boolean,
  },
  name: "Expenses",
  data: () => ({
    headers: [
      {
        text: "Identificação",
        align: "start",
        sortable: true,
        value: "name",
      },
      { text: "Valor", value: "price" },
      { text: "Data da transação", value: "created_at" },
    ],
  }),
};
</script>
