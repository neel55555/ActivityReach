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
					<v-ons-tabbar @add-cat-btn-clicked="pushPage" @edit-button-click="pushPage" swipeable position="auto" :tabs="tabs" :visible="true" :index.sync="tabActiveIndex"></v-ons-tabbar>
				</v-ons-page>
			</v-ons-splitter-content>
		</v-ons-splitter>
	</v-ons-page>
</template>

<script>
	
	import WATCH from './StopWatch.vue';
	import RECENT_ACTIVITY from './RecentActivity.vue';
	
	export default {
	
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
			},
			pushPage: function(e){
				this.$emit('push-page', e)
			}
		}
	}
</script>