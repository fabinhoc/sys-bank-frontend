import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./plugins/axios";
import vuetify from "./plugins/vuetify";
import vueCurrencyInput from "./plugins/vueCurrencyInput";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  axios,
  vueCurrencyInput,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
