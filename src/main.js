import Vue from 'nativescript-vue';

import router from './router';

import {
  TNSFontIcon,
  fonticon
} from "nativescript-fonticon"; // require the couchbase module

import {
  Feedback,
  FeedbackType,
  FeedbackPosition
} from "nativescript-feedback";

import './styles.scss';

TNSFontIcon.debug = true;
TNSFontIcon.paths = {
  fa: "FontAwesome.css",
  mdi: "MaterialIcons.css"
};
TNSFontIcon.loadCss();

Vue.prototype.$feedback = new Feedback();
Vue.filter("fonticon", fonticon);

// Uncommment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,


}).$start();