import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'
import VueContentPlaceholders from 'vue-content-placeholders'
import VueGtag from "vue-gtag";

Vue.use(VueGtag, {
  config: { id: "G-PDDGBNWBPG" }
});

Vue.config.productionTip = false
    // Install BootstrapVue
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueContentPlaceholders)

new Vue({
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: "AIzaSyBTtmpkRCwzjNefEZ4FFdrf_243zC63YJw",
            authDomain: "vishalkhare-b30bb.firebaseapp.com",
            projectId: "vishalkhare-b30bb",
            storageBucket: "vishalkhare-b30bb.appspot.com",
            messagingSenderId: "390151245630",
            appId: "1:390151245630:web:5bb30f68224296d72ce66f",
            measurementId: "G-PDDGBNWBPG"
        })
    }
}).$mount('#app')