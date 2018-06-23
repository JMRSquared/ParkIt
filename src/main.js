import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';
import {
  TNSFontIcon,
  fonticon
} from "nativescript-fonticon"; // require the couchbase module


Vue.registerElement(
  "CardView",
  () => require("nativescript-cardview").CardView
);


TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  fa: "FontAwesome.css",
  mdi: "MaterialIcons.css"
};
TNSFontIcon.loadCss();
Vue.filter("fonticon", fonticon);

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,

  store,

}).$start();