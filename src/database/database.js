import dataInit from './dataInit.js';
//CREATE TABLES
export default {
	createTable: function(schemaBuilder){
		
		schemaBuilder.createTable('category').
			addColumn('id', lf.Type.INTEGER).
			addColumn('name', lf.Type.STRING).
			addColumn('icon', lf.Type.STRING).
			addColumn('is_admin_defined', lf.Type.BOOLEAN).
			addColumn('sync_status', lf.Type.BOOLEAN).
			addPrimaryKey(['id']);
			
		schemaBuilder.createTable('sub_category').
			addColumn('id', lf.Type.INTEGER).
			addColumn('name', lf.Type.STRING).
			addColumn('is_admin_defined', lf.Type.BOOLEAN).
			addColumn('sync_status', lf.Type.BOOLEAN).
			addColumn('category_id', lf.Type.INTEGER).
			addPrimaryKey(['id']);
			
		schemaBuilder.createTable('activity').
			addColumn('id', lf.Type.STRING).
			addColumn('description', lf.Type.STRING).
			addColumn('start_time', lf.Type.DATE_TIME).
			addColumn('total_time', lf.Type.INTEGER).
			addColumn('formatted_time', lf.Type.STRING).
			addColumn('created_at', lf.Type.DATE_TIME).
			addColumn('sync_status', lf.Type.BOOLEAN).
			addColumn('sub_category_id', lf.Type.INTEGER).
			addPrimaryKey(['id']);
			
	},
	populate: function(db){
		if(!localStorage.is_database_imported){
			db.import(dataInit).then(function(){
				localStorage.is_database_imported = 'true';
			});
		};
	}
	
}
