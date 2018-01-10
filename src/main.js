//DEPENDENCIES
//import $ from 'jquery';
//import runner from 'jquery.runner';
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

//APP MODULES
import App from './App.vue';
import Toolbar from './Toolbar.vue';

Vue.use(VueOnsen);

Vue.component('toolbar', Toolbar);


new Vue({
	el: '#app',
	render: h => h(App)
});
