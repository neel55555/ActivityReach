
function populateDB(tx){
	//tx.executeSql('DROP TABLE category');
	//tx.executeSql('DROP TABLE sub_category');
	//tx.executeSql('DROP TABLE activity');
	tx.executeSql('CREATE TABLE IF NOT EXISTS category (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), is_admin_defined VARCHAR(255), sync_status VARCHAR(255))');
	tx.executeSql('CREATE TABLE IF NOT EXISTS activity (id INTEGER PRIMARY KEY AUTOINCREMENT, description TEXT, sub_category_id INTEGER, formatted_time VARCHAR(255), start_time INTEGER, time INTEGER, created_at INTEGER, sync_status VARCHAR(255))');
	tx.executeSql('CREATE TABLE IF NOT EXISTS sub_category (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), category_id INTEGER, is_admin_defined VARCHAR(255), sync_status VARCHAR(255))');
};

function onDeviceReady(){
	
	db.transaction(populateDB, errorCB, function(){
		
		if(!(localStorage.databasePrePopulated == 'true')){
			

			function pupulateCategory(tx){
				tx.executeSql('INSERT INTO category(name, is_admin_defined, sync_status) VALUES (?,?,?)', ['Technical', 'YES', 'YES']);
				tx.executeSql('INSERT INTO category(name, is_admin_defined, sync_status) VALUES (?,?,?)', ['Tactical', 'YES', 'YES']);
				tx.executeSql('INSERT INTO category(name, is_admin_defined, sync_status) VALUES (?,?,?)', ['Physical', 'YES', 'YES']);
				tx.executeSql('INSERT INTO category(name, is_admin_defined, sync_status) VALUES (?,?,?)', ['Psychological', 'YES', 'YES']);
				tx.executeSql('INSERT INTO category(name, is_admin_defined, sync_status) VALUES (?,?,?)', ['Social', 'YES', 'YES']);
				tx.executeSql('INSERT INTO category(name, is_admin_defined, sync_status) VALUES (?,?,?)', ['Dietary', 'YES', 'YES']);
				tx.executeSql('INSERT INTO category(name, is_admin_defined, sync_status) VALUES (?,?,?)', ['Recovery', 'YES', 'YES']);
			};
			
			db.transaction(pupulateCategory, errorCB, function(){
				
				function populateSubCategory(tx){
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Footwork', 1, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Headwork', 1, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Corner Kicks',2, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Weight Training',3, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Running', 3, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Yoga', 3, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Team Event', 5, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Breakfast', 6, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Luch', 6, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Dinner', 6, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Therapy', 7, 'YES', 'YES']);
					tx.executeSql('INSERT INTO sub_category(name, category_id, is_admin_defined, sync_status) VALUES (?,?,?,?)', ['Massage', 7, 'YES', 'YES']);
				};
				
				db.transaction(populateSubCategory, errorCB, function(){
					localStorage.databasePrePopulated = 'true';
				});
				
			});
			
			
		};
		
	});
	
};

document.addEventListener("deviceready", onDeviceReady, false);