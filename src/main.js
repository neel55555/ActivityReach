//DEPENDENCIES
//import $ from 'jquery';
//import runner from 'jquery.runner';


//Vue Onsen
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import lf from 'lovefield';
import Vuex from 'vuex';

//APP MODULES
import App from './App.vue';
import Toolbar from './Toolbar.vue';
import store1 from './store.js';

Vue.use(VueOnsen);
Vue.use(Vuex);

const store = new Vuex.Store(store1);
Vue.component('toolbar', Toolbar);
	
new Vue({
	el: '#app',
	store: store,
	render: h => h(App)
});
