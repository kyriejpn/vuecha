import firebase from 'firebase'
import("firebase/functions");
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
import Meta from 'vue-meta'

// Vue.use(Meta)
VueClipboard.config.autoSetContainer = true // add this line

Vue.use(VueClipboard)
Vue.use(VueAxios, axios)
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
// import moment from 'vue-moment'
// moment.locale('ja');
Vue.use(VueCookie);

// Vue.use(moment);

Vue.config.productionTip = false

// Initialize Firebase
var config = {
 // ここにFirebaseから取得したconfigをペースト

  // Your web app's Firebase configuration
    apiKey: "AIzaSyBROAeCPH86OFj8z_dYrv7fpWGPnt8RSJE",
    authDomain: "twchat-a10a0.firebaseapp.com",
    databaseURL: "https://twchat-a10a0.firebaseio.com",
    projectId: "twchat-a10a0",
    storageBucket: "twchat-a10a0.appspot.com",
    messagingSenderId: "5841476862",
    appId: "1:5841476862:web:1af8a9ef1833f0bceb59af",
    measurementId: "G-P33HSL09N8"
}
    firebase.initializeApp(config)

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      components: { App },
      template: '<App/>'
    })