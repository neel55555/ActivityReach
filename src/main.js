//DEPENDENCIES
//import $ from 'jquery';
//import runner from 'jquery.runner';


//Vue Onsen
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';
import lf from 'lovefield';

//APP MODULES
import App from './App.vue';
import Toolbar from './Toolbar.vue';

Vue.use(VueOnsen);


Vue.component('toolbar', Toolbar);

	
new Vue({
	el: '#app',
	render: h => h(App)
});
