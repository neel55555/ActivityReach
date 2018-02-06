<template id="splitter">
	<v-ons-page>
		<v-ons-splitter>
			<v-ons-splitter-side id="menu" :open.sync="isMenuOpen" swipeable width="250px" collapse="" side="left">
				<v-ons-page>
					<div class="profile">
						<div class="profile-pic">
							<v-ons-icon icon="md-account-circle" size="92px" style="color:#FFFFFF"></v-ons-icon>
						</div>
					</div>
					<v-ons-list>
					
						<v-ons-list-item tappable>
							<div class="left">
								<v-ons-icon icon="md-swap" size="24px"></v-ons-icon>
							</div>
							<div class="center">
								CONNECT
							</div>
						</v-ons-list-item>
						
						<v-ons-list-item tappable>
							<div class="left">
								<v-ons-icon icon="md-settings" size="24px"></v-ons-icon>
							</div>
							<div class="center">
								SETTINGS
							</div>
						</v-ons-list-item>
						
						<v-ons-list-item tappable>
							<div class="left">
								<v-ons-icon icon="fa-support" size="24px"></v-ons-icon>
							</div>
							<div class="center">
								HELP
							</div>
						</v-ons-list-item>
						
						<v-ons-list-item tappable>
							<div class="left">
								<v-ons-icon icon="md-help" size="24px"></v-ons-icon>
							</div>
							<div class="center">
								ABOUT
							</div>
						</v-ons-list-item>
						
					</v-ons-list>
				</v-ons-page>
			</v-ons-splitter-side>
			
			<v-ons-splitter-content>
				<v-ons-page>
					<toolbar title="ActivityReach" @menu-button-click="menuOpen"></toolbar>
					<v-ons-tabbar swipeable position="auto" :tabs="tabs" :visible="true" :index.sync="tabActiveIndex"></v-ons-tabbar>
				</v-ons-page>
			</v-ons-splitter-content>
		</v-ons-splitter>
	</v-ons-page>
</template>

<script>
	
	import WATCH from './StopWatch.vue';
	import RECENT_ACTIVITY from './RecentActivity.vue';
	import Database from './database/database.js';
	
	export default {
		mounted: function(){
			var self = this;
			var sub_categories = new Array();
			self.$nextTick(function(){
				// FETCHING CATEGORIES FROM DATABASE
				var SB = lf.schema.create('ActivityReach', 1);
				Database.createTable(SB);
				SB.connect().then(function(db){
					//POPULATE DATABASE APP-INIT IF NOT POPULATED
					Database.populate(db);
					
					var C = db.getSchema().table('category');
					var SC = db.getSchema().table('sub_category');
					var A = db.getSchema().table('activity');
					
					//FETCH SUB_CATEGORIES
					db.select(C.name,C.id,C.icon,SC.id,SC.name)
					.from(C)
					.innerJoin(SC, SC.category_id.eq(C.id))
					.orderBy(C.id, lf.Order.ASC)
					.exec().then(function(result){
						result.forEach(function(row){
							if(!Array.isArray(sub_categories[row.category.id])){
								sub_categories[row.category.id] = [];
							};
							sub_categories[row.category.id].push({"id":row.sub_category.id,"name":row.sub_category.name});
							
						});
						self.$store.state.sub_categories = sub_categories;
						console.log(sub_categories);
					});
					
					//FETCH CATEGORY
					db.select(C.id, C.name, C.icon).from(C).exec().then(result=>{
						self.$store.state.categories = result;
						console.log(result);
					});
					
					//FETCH ACTIVITIES
					db.select(A.formatted_time, A.start_time, A.id, C.icon, SC.name).from(A)
					.innerJoin(SC, SC.id.eq(A.sub_category_id))
					.innerJoin(C, C.id.eq(SC.category_id))
					.orderBy(A.created_at, lf.Order.DESC)
					.exec().then(function(result){
						result.forEach(function(row){
							self.$store.state.activities.push(row);
						});
					});
				});
			});
		},
		data: function(){
			return {
				tabActiveIndex: 0,
				isMenuOpen: false,
				openSide: false,
				tabs: [
					{
						icon: this.md() ? null : 'ion-home',
						label: 'Watch',
						page: WATCH,
						key: "stopwatch"
					},
					{
						icon: this.md() ? null : 'ion-ios-bell',
						label: 'Recent',
						page: RECENT_ACTIVITY,
						key: "recent"
					}
				]
				
			};
		},
		methods: {
			md: function() {
				return this.$ons.platform.isAndroid();
			},
			menuOpen: function(){
				this.isMenuOpen = true;
			}
		}
	}
</script>