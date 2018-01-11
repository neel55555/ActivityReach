//DEPENDENCIES
//import $ from 'jquery';
//import runner from 'jquery.runner';

import lf from 'lovefield';
import data_init from './data/data-init.js';

//Vue Onsen
import Vue from 'vue';
import VueOnsen from 'vue-onsenui';

//APP MODULES
import App from './App.vue';
import Toolbar from './Toolbar.vue';

Vue.use(VueOnsen);

Vue.component('toolbar', Toolbar);

//CREATE TABLES
var schemaBuilder = lf.schema.create('ActivityReach', 1);

schemaBuilder.createTable('category').
    addColumn('id', lf.Type.INTEGER).
    addColumn('description', lf.Type.STRING).
    addColumn('deadline', lf.Type.DATE_TIME).
    addColumn('done', lf.Type.BOOLEAN).
    addPrimaryKey(['id']);
	
schemaBuilder.createTable('sub_category').
	addColumn('id', lf.Type.INTEGER).
	addColumn('name', lf.Type.STRING).
	addColumn('is_admin_defined', lf.Type.BOOLEAN).
	addColumn('sync_status', lf.Type.BOOLEAN).
	addColumn('category_id', lf.Type.INTEGER).
	addPrimaryKey(['id']);
	
schemaBuilder.createTable('activity').
	addColumn('id', lf.Type.INTEGER).
	addColumn('description', lf.Type.STRING).
	addColumn('start_time', lf.Type.DATE_TIME).
	addColumn('total_time', lf.Type.INTEGER).
	addColumn('formatted_time', lf.Type.STRING).
	addColumn('created_at', lf.Type.DATE_TIME).
	addColumn('sync_status', lf.Type.BOOLEAN).
	addColumn('sub_category_id', lf.Type.INTEGER).
	addPrimaryKey(['id']);
	
schemaBuilder.connect().then(function(db){
	db.import(data_init).then(function(){
		console.log('Data imported successfully');
	});
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
new Vue({
	el: '#app',
	render: h => h(App)
});
