
export default {

  "name": "ActivityReach",
  "version": 1.0,
  "tables": {
    "category": [
		{
			"id": 1,
			"name":"Technical",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 2,
			"name":"Tactical",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 3,
			"name":"Physical",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 4,
			"name":"Psychological",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 5,
			"name":"Social",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 6,
			"name":"Dietary",
			"is_admin_defined": true,
			"sync_status": true
		},
		{
			"id": 7,
			"name":"Recovery",
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