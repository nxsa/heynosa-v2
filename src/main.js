import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import Meta from "vue-meta";

Vue.use(Meta);

//Importing Global SCSS
import "@/assets/styles/main.scss";
import "@/assets/styles/main-responsive.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
