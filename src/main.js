import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserSecret,
  faEnvelopeOpenText,
  faFileDownload,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faCalendarAlt,
  faUserSecret,
  faEnvelopeOpenText,
  faFileDownload,
  faLinkedinIn,
  faGithubSquare
);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({ router, render: (h) => h(App) }).$mount("#app");
