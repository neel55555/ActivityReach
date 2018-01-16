
export default {

  "name": "ActivityReach",
  "version": 1.0,
  "tables": {
    "category": [
		{
			"id": 1,
			"name": "Technical",
			"icon": "ion-settings",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 2,
			"name":"Tactical",
			"icon": "ion-steam",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 3,
			"name":"Physical",
			"icon": "ion-android-bicycle",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 4,
			"name":"Psychological",
			"icon": "ion-heart-broken",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 5,
			"name":"Social",
			"icon": "ion-ios-people",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 6,
			"name":"Dietary",
			"icon": "ion-android-restaurant",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 7,
			"name":"Recovery",
			"icon": "ion-leaf",
			"is_admin_defined": true,
			"sync_status": true
		}
    ],
    "sub_category": [
		{
			"id": 1,
			"name":"Footwork",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 1
		},
		{
			"id": 2,
			"name":"Headwork",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 1
		},
		{
			"id": 3,
			"name":"Corner Kicks",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 2
		},
		{
			"id": 4,
			"name":"Weight Training",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 3
		},
		{
			"id": 5,
			"name":"Running",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 3
		},
		{
			"id": 6,
			"name":"Yoga",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 3
		},
		{
			"id": 7,
			"name":"Team Event",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 5
		},
		{
			"id": 8,
			"name":"Breakfast",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 6
		},
		{
			"id": 9,
			"name":"Luch",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 6
		},
		{
			"id": 10,
			"name":"Dinner",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 6
		},
		{
			"id": 11,
			"name":"Therapy",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 7
		},
		{
			"id": 12,
			"name":"Massage",
			"is_admin_defined": true,
			"sync_status": true,
			"category_id": 7
		}
	]
  }
};